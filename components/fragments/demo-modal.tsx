import { Modal } from '@/components/fragments'
import { useState, Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import Image from 'next/image'

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean
  setShowDemoModal: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://keeg.in">
            <Image
              src="/logo.png"
              alt="Keeg.in Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Keegan</h3>
          <p className="text-sm text-gray-500">
            Keegan Burkett is a software engineer and designer based in the
            midwest.
          </p>
        </div>
      </div>
    </Modal>
  )
}

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false)

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    )
  }, [showDemoModal, setShowDemoModal])

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  )
}
