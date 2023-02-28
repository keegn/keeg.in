import { Modal } from '@/components/fragments'
import { useState, Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  honey?: string
  email: string
}

const NewsletterModal = ({
  showNewsletterModal,
  setShowNewsletterModal,
}: {
  showNewsletterModal: boolean
  setShowNewsletterModal: Dispatch<SetStateAction<boolean>>
}) => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>()

  const [submitted, setSubmitted] = useState(false)

  const routeTo = (email: string, route: string) => {
    router.push({
      pathname: `${route}}`,
      query: { email: email },
    })
  }

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (getValues().honey) {
      return
    }

    //example call routeTo(data.email, '/newsletter/confirm')

    try {
      let res = await fetch('/api/form/early-access-email', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      setSubmitted(true)
      return res.json()
    } catch (err) {
      console.log(err)
      setSubmitted(false)
    }
  }

  return (
    <Modal
      showModal={showNewsletterModal}
      setShowModal={setShowNewsletterModal}
    >
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://keeg.in">
            <Image
              src="/logo.png"
              alt="Keegan Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Request Access</h3>
          <p className="text-sm text-gray-500">
            Every few weeks, I send out a newsletter with my latest thoughts on
            life, tech, and new projects.
          </p>
          <form
            className="flex w-full flex-col gap-4"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              id="honey"
              type="hidden"
              {...register('honey')}
              placeholder="Some text here"
              className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 transition duration-200 ease-in-out focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
            <div className="text-left">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email-address"
                  type="email"
                  autoComplete="email"
                  {...register('email', { required: true })}
                  placeholder="you@example.com"
                  required
                  className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 transition duration-200 ease-in-out focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="relative rounded-full border border-black bg-black p-2 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <svg
                  aria-hidden="true"
                  className="dark:fill-text-gray-200 absolute bottom-1.5 right-0 mr-2 h-6 w-6 animate-spin fill-gray-600 text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              )}
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export function useNewsletterModal() {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false)

  const NewsletterModalCallback = useCallback(() => {
    return (
      <NewsletterModal
        showNewsletterModal={showNewsletterModal}
        setShowNewsletterModal={setShowNewsletterModal}
      />
    )
  }, [showNewsletterModal, setShowNewsletterModal])

  return useMemo(
    () => ({
      setShowNewsletterModal,
      NewsletterModal: NewsletterModalCallback,
    }),
    [setShowNewsletterModal, NewsletterModalCallback],
  )
}
