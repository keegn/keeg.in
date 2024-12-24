'use client'

import { useEffect, useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { useTheme } from 'next-themes'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Container } from '@/components/fragments/container'
import { LoadingDots } from '@/components/fragments/loading-dots'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface FormInputProps {
  honey?: string
  firstName: string
  lastName: string
  email: string
  company: string
}

interface AccessModalProps {}

export function MailingListForm({}: AccessModalProps) {
  const { theme } = useTheme()
  const [, setOpen] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputProps>()

  useEffect(() => {
    // Check if the form was already submitted in this session
    const submitted = sessionStorage.getItem('formSubmitted')
    if (submitted) {
      setHasSubmitted(true)
    }
  }, [])

  const onSubmit: SubmitHandler<FormInputProps> = async (data) => {
    if (getValues().honey) {
      return
    }

    setHasSubmitted(true)
    sessionStorage.setItem('formSubmitted', 'true')

    try {
      let response = await fetch('/api/forms/mailing-list', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      reset({
        email: '',
      })

      const res = await response.json()
      setOpen(false)
      toast({
        title: 'Success',
        description: "You're on the list for early access!",
      })

      return res
    } catch (err) {
      console.log(err)
    }
  }

  const isEmpty = (obj: any) => {
    return Object.keys(obj).length === 0
  }

  return (
    <Container type="section" className="-mt-12 pb-6">
      <div className="rounded-xl">
        <div className="grid auto-rows-auto gap-12">
          <div className="grid grid-cols-1 gap-2">
            <p className="text-tertiary-foreground">Mailing list</p>
            <p>
              Infrequent insights on new projects and interesting finds. No
              spam. Unsubscribe anytime.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <input
                id="honey"
                type="hidden"
                {...register('honey')}
                placeholder="Some text here"
                className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 transition duration-200 ease-in-out focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              />
              <div>
                <div className="mt-3 flex max-w-md gap-x-4">
                  {hasSubmitted ? (
                    // NOTE: pb-4 for is a quick hack for the page jumping when the form is submitted
                    <p className="pb-4 text-tertiary-foreground">
                      Awesome, you&apos;re on the list! Thanks for subscribing.
                    </p>
                  ) : (
                    <>
                      {' '}
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        {...register('email', { required: true })}
                        className="placeholder:text-tertiary-foreground autofill:bg-black"
                      />
                      <Button
                        type="submit"
                        variant={'secondary'}
                        className="dark:hover-text-white dark:disabled:big-zinc-500 rounded-md border border-input bg-background text-tertiary-foreground"
                        disabled={!isEmpty(errors) || isSubmitting}
                      >
                        {!isSubmitting ? (
                          'Subscribe'
                        ) : (
                          <LoadingDots
                            color={theme === 'dark' ? 'white' : 'black'}
                          />
                        )}
                      </Button>{' '}
                    </>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  )
}
