import Balancer from 'react-wrap-balancer'
import { motion } from 'framer-motion'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { useRequestAccessModal, Container } from '@/components/fragments'

export function HomeHero() {
  const { RequestAccessModal, setShowRequestAccessModal } =
    useRequestAccessModal()
  return (
    <>
      <RequestAccessModal />
      <Container section>
        <motion.div
          className="mx-auto flex max-w-xl flex-col items-start"
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
            className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-4xl md:leading-[5rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Keegan Burkett
          </motion.h1>
          <motion.p
            className="mt-2 text-left font-default text-gray-500 md:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            An opinionated collection of components, hooks, and utilities for
            your Next.js project.
          </motion.p>
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
        ></motion.div>
      </Container>
    </>
  )
}
