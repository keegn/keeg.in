import Balancer from 'react-wrap-balancer'
import { motion } from 'framer-motion'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { Twitter } from '@/components/icons'
import Image from 'next/image'
import { useRequestAccessModal, Container } from '@/components/fragments'
import screenshot from '@/public/screenshot.jpg'

export function HomeHero() {
  const { RequestAccessModal, setShowRequestAccessModal } =
    useRequestAccessModal()
  return (
    <>
      <RequestAccessModal />
      <Container section>
        <motion.div
          className="mx-auto max-w-xl pt-16"
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h1
            className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>Building blocks for your Next project</Balancer>
          </motion.h1>
          <motion.p
            className="mt-6 text-center font-default text-gray-500 md:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>
              An opinionated collection of components, hooks, and utilities for
              your Next.js project.
            </Balancer>
          </motion.p>
          <motion.div
            className="mx-auto mt-6 flex items-center justify-center space-x-5"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            onClick={() => setShowRequestAccessModal(true)}
          >
            <a
              //   className="group flex max-w-fit cursor-pointer items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
              className="flex w-full max-w-sm cursor-pointer items-center justify-center gap-3 rounded-lg bg-gradient-to-t from-red-500 to-orange-500 px-16 py-2 font-medium text-white saturate-[120%] transition-all hover:brightness-110 focus:border-0 focus:outline-none focus:ring-0 focus:ring-white md:px-12 md:text-lg lg:py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className=" text-md font-default text-base">
                Get early access
              </p>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex max-w-5xl flex-col items-center"
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <Image
            src={screenshot}
            alt="product screenshot"
            className="mt-24 rounded-lg border shadow "
          />
        </motion.div>
      </Container>
    </>
  )
}
