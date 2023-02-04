import Link from 'next/link'
import { motion } from 'framer-motion'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import {
  useRequestAccessModal,
  Container,
  ModeToggle,
} from '@/components/fragments'
import { ExpandingArrow, Logo } from '../icons'
import { useState } from 'react'

export function HomeHero() {
  const { RequestAccessModal, setShowRequestAccessModal } =
    useRequestAccessModal()

  return (
    <>
      <RequestAccessModal />
      <Container section className="max-w-lg pt-8 sm:pt-0">
        <motion.div
          className="mx-auto flex max-w-xl flex-col items-start gap-5"
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
          <Logo />
          <div className="flex flex-row justify-between">
            <motion.h1
              className="bg-gradient-to-br  from-black to-stone-500  bg-clip-text text-center font-display text-xl font-bold tracking-tight text-transparent drop-shadow-sm dark:from-white dark:to-slate-400 sm:text-2xl"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Keegan Burkett
            </motion.h1>
            <ModeToggle />
          </div>
          <motion.p
            className="text-left font-default text-gray-500 dark:text-slate-300 sm:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Designing and building software for real estate and privacy focused
            companies. Previously focused on building software at{' '}
            <Link href="https://paytient.com" target={'_blank'}>
              Paytient
            </Link>
            , a new way to pay for out of pocket health care.
          </motion.p>
          <div />
          <motion.div>
            <h4 className=" text-sm font-semibold uppercase text-gray-500 dark:text-slate-300">
              Links
            </h4>
          </motion.div>
          <motion.div className="flex w-full flex-row justify-between">
            <div className="flex w-full flex-col gap-2">
              <div className="border-b-2 border-slate-800 pr-4 ">
                <Link
                  href=""
                  className="flex justify-between  pb-2 text-left text-lg  text-gray-500 hover:cursor-pointer dark:text-slate-300 sm:text-lg"
                >
                  Twitter
                  <ExpandingArrow />
                </Link>
              </div>
              <Link
                href=""
                className="flex justify-between border-b-2 border-slate-800 pb-2 text-left text-lg  text-gray-500 hover:cursor-pointer dark:text-slate-300 sm:text-lg"
              >
                Github
                <ExpandingArrow className="relative" />
              </Link>
            </div>
            <div className="ml-2 flex w-full flex-col gap-2">
              <Link
                href=""
                className="flex justify-between border-b-2 border-slate-800 pb-2 text-left text-lg  text-gray-500 hover:cursor-pointer dark:text-slate-300 sm:text-lg"
              >
                Dribbble
                <ExpandingArrow className="relative" />
              </Link>
              <Link
                href=""
                className="flex justify-between border-b-2 border-slate-800 pb-2 text-left text-lg  text-gray-500 hover:cursor-pointer dark:text-slate-300 sm:text-lg"
              >
                LinkedIn
                <ExpandingArrow className="relative" />
              </Link>
            </div>
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
        ></motion.div>
      </Container>
    </>
  )
}
