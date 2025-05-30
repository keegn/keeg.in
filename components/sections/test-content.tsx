'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { Container } from '@/components/fragments/container'
import { FullGrid } from '@/components/fragments/full-grid'
import { ExpandingArrow } from '@/components/ui/expanding-arrow'

export function TestContent() {
  return (
    <>
      <FullGrid />
      <Container type="section" className="max-w-lg pt-8 sm:pt-0">
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
          <div>
            <motion.h1
              className="font-default bg-gradient-to-br from-white to-slate-400 bg-clip-text text-lg font-bold text-transparent drop-shadow-sm sm:text-xl"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Keegan Burkett
            </motion.h1>
            {/* 
            For testing purposes, I'm going to leave this here until light mode is ready.
            <ModeToggle />
             */}
            {/* <motion.p
              className="text-left font-default text-lg font-light text-[#999999] sm:text-xl"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            > */}
            {/*
              Currently there is a bug with the text scrambler on mobile. I'm going to leave this here until I can fix it.
               <TextScrambler>Design Engineer</TextScrambler>
                */}
            {/* Design Engineer
            </motion.p> */}
          </div>
          <motion.p
            className="font-default text-left text-lg font-light text-[#999999] sm:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            A detail oriented frontend software engineer working with tools like
            Next.js, Prisma, React, React Native, Open AI, TypeScript, and
            Tailwind CSS. Interested in AI, privacy, and real estate. Previously
            founding team at{' '}
            <Link
              href="https://paytient.com"
              target={'_blank'}
              className="text-white"
            >
              Paytient
            </Link>
            .
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
            <div className="mr-4 flex w-full flex-col gap-2">
              <div className="group">
                <Link
                  href="https://twitter.com/keegnn"
                  target="_blank"
                  className="text-md font-default flex justify-between border-b-[1px] border-gray-800 border-opacity-70 bg-gradient-to-br from-white to-slate-400 bg-clip-text pb-2 text-left text-transparent hover:cursor-pointer"
                >
                  Twitter
                  <ExpandingArrow />
                </Link>
              </div>
              <div className="group">
                <Link
                  href="https://github.com/keegn"
                  target="_blank"
                  className="text-md font-default flex justify-between bg-gradient-to-br from-white to-slate-400 bg-clip-text pb-2 text-left text-transparent hover:cursor-pointer"
                >
                  Github
                  <ExpandingArrow />
                </Link>
              </div>
            </div>
            <div className="flex w-full flex-col gap-2">
              <div className="group">
                <Link
                  href="https://www.linkedin.com/in/keeganburkett/"
                  target="_blank"
                  className="text-md font-default flex justify-between border-b-[1px] border-gray-800 border-opacity-70 bg-gradient-to-br from-white to-slate-400 bg-clip-text pb-2 text-left text-transparent hover:cursor-pointer"
                >
                  LinkedIn
                  <ExpandingArrow />
                </Link>
              </div>
              <div className="group">
                <Link
                  href="https://dribbble.com/keegin"
                  target="_blank"
                  className="text-md flex justify-between bg-gradient-to-br from-white to-slate-400 bg-clip-text pb-2 text-transparent hover:cursor-pointer"
                >
                  Dribbble
                  <ExpandingArrow />
                </Link>
              </div>
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
