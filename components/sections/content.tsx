import Link from 'next/link'
import { motion } from 'framer-motion'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import {
  useRequestAccessModal,
  Container,
  ModeToggle,
} from '@/components/fragments'
import { ExpandingArrow, FullGrid, Logo } from '../icons'
import { useState } from 'react'

export function HomeHero() {
  const { RequestAccessModal, setShowRequestAccessModal } =
    useRequestAccessModal()

  return (
    <>
      <RequestAccessModal />
      {/* <div
        className="absolute top-0 -z-10 h-full w-full bg-repeat"
        style={{ backgroundImage: `url('/grid.svg')` }}
      /> */}
      <FullGrid />
      <Container section className="max-w-lg pt-8 sm:pt-0">
        <motion.div
          className="mx-auto flex max-w-xl flex-col items-start gap-4"
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
          <div className="flex flex-row justify-between">
            <motion.h1
              className="bg-gradient-to-br from-white to-slate-400 bg-clip-text  text-center font-default text-xl font-bold text-transparent drop-shadow-sm sm:text-2xl"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Keegan Burkett
            </motion.h1>
            {/* 
            For testing purposes, I'm going to leave this here until light mode is ready.
            <ModeToggle />
             */}
          </div>
          <motion.p
            className="text-left font-default text-lg font-light dark:text-[#999999] sm:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Designing and building software for real estate and privacy focused
            companies. Previously focused on building software at{' '}
            <Link
              href="https://paytient.com"
              target={'_blank'}
              className="dark:text-white"
            >
              Paytient
            </Link>
            , a new way to pay for out of pocket health care.
          </motion.p>
          <div />
          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <h4 className="font-default text-xs font-semibold uppercase text-[#999999]">
              Links
            </h4>
          </motion.div>
          <motion.div
            className="flex w-full flex-row justify-between"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <div className="flex w-full flex-col gap-2">
              <div className="pr-4">
                <Link
                  href=""
                  className="text-md flex justify-between border-b-[1px] border-slate-800 bg-gradient-to-br from-white to-slate-400  bg-clip-text  pb-2 text-left font-default text-transparent hover:cursor-pointer"
                >
                  Twitter
                  <ExpandingArrow />
                </Link>
              </div>
              <Link
                href=""
                className="text-md flex justify-between bg-gradient-to-br from-white to-slate-400  bg-clip-text  pb-2 text-left font-default text-transparent hover:cursor-pointer"
              >
                Github
                <ExpandingArrow className="relative" />
              </Link>
            </div>
            <div className="ml-2 flex w-full flex-col gap-2">
              <Link
                href=""
                className="text-md 0  flex justify-between border-b-[1px] border-slate-800 bg-gradient-to-br   from-white to-slate-400 bg-clip-text pb-2 text-left font-default  text-transparent hover:cursor-pointer"
              >
                Dribbble
                <ExpandingArrow className="relative" />
              </Link>
              <Link
                href=""
                className="text-md flex  justify-between bg-gradient-to-br from-white to-slate-400 bg-clip-text pb-2  text-transparent hover:cursor-pointer"
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
