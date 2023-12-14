'use client'

import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { SubmitHandler, useForm } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { LoadingDots } from '@/components/fragments/loading-dots'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface FormInputProps {
  honey?: string
  firstName: string
  lastName: string
  email: string
  company: string
}

interface AccessModalProps {}

export function MailingListForm({}: AccessModalProps) {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputProps>()

  const onSubmit: SubmitHandler<FormInputProps> = async (data) => {
    if (getValues().honey) {
      return
    }

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        id="honey"
        type="hidden"
        {...register('honey')}
        placeholder="Some text here"
        className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 transition duration-200 ease-in-out focus:border-black focus:outline-none focus:ring-black sm:text-sm"
      />
      <div className="grid gap-6 py-4">
        <div className="grid grid-cols-1 justify-items-start gap-2">
          <Label className="text-right">Email address</Label>
          <Input
            type="email"
            placeholder="Your work email address"
            {...register('email', { required: true })}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="dark:hover-text-white dark:disabled:big-zinc-500 bg-accent-300 hover:bg-accent-500 dark:bg-accent-300 dark:hover:bg-accent-500 rounded-sm text-black hover:text-white disabled:bg-zinc-500"
        disabled={!isEmpty(errors) || isSubmitting}
      >
        {!isSubmitting ? 'Submit' : <LoadingDots color="white" />}
      </Button>
    </form>
  )
}
