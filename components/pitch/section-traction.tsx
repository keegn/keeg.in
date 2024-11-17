'use client'

// import { fetchGithubStars } from "@/lib/fetch-github-stars";
// import { fetchStats } from "@/lib/fetch-stats";
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import customers from './customers.png'
import { Card } from './ui'

export function SectionTraction() {
  const [stars, setStars] = useState<number | null>(null)
  const [users, setUsers] = useState(0)
  const [transactions, setTransactions] = useState(0)

  // useEffect(() => {
  //   async function fetchStars() {
  //     try {
  //       const response = await fetchGithubStars()
  //       setStars(response)
  //     } catch {}
  //   }

  //   async function fetchCount() {
  //     try {
  //       const { users, transactions } = await fetchStats()
  //       setUsers(users)
  //       setTransactions(transactions)
  //     } catch {}
  //   }

  //   fetchStars()
  //   fetchCount()
  // }, [])

  return (
    <div className="relative min-h-screen w-screen">
      <div className="absolute left-4 right-4 top-4 flex justify-between text-lg md:left-8 md:right-8">
        <span>Where we are</span>
        <span className="text-[#878787]">
          <Link href="/">midday.ai</Link>
        </span>
      </div>
      <div className="container flex min-h-screen flex-col justify-center">
        <div className="grid h-[580px] gap-8 overflow-auto px-4 pb-[100px] md:h-auto md:grid-cols-3 md:px-0 md:pb-0 md:pt-0">
          <div className="space-y-8">
            <Card className="min-h-[365px]">
              <h2 className="text-2xl">Waitlist sign ups</h2>

              <p className="text-center text-sm text-[#878787]">
                We have built Midday in public on X and amassed nearly 4000
                signups ready to start using Midday.
              </p>

              <span className="mt-auto font-mono text-[80px] md:text-[122px]">
                3453
              </span>
            </Card>

            <Card className="min-h-[365px]">
              <h2 className="text-2xl">GitHub stars</h2>

              <p className="text-center text-sm text-[#878787]">
                Our goal is to build a great community around Midday.
              </p>

              <div className="flex items-center space-x-4">
                <span className="relative ml-auto flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="mt-auto font-mono text-[80px] md:text-[122px]">
                  {/* {stars &&
                    Intl.NumberFormat('en', {
                      notation: 'compact',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 1,
                    }).format(stars.stargazers_count ?? 0)} */}
                </span>
              </div>
            </Card>
          </div>
          <div className="space-y-8">
            <Card className="min-h-[365px]">
              <h2 className="text-2xl">Customers</h2>

              <p className="text-center text-sm text-[#878787]">
                This is the number of customers currently using Midday.
              </p>

              <div className="flex items-center space-x-4">
                <span className="relative ml-auto flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>

                <span className="mt-auto font-mono text-[80px] md:text-[122px]">
                  {users}
                </span>
              </div>
            </Card>

            <Card className="min-h-[365px]">
              <h2 className="text-2xl">Transactions</h2>

              <p className="text-center text-sm text-[#878787]">
                We are already handling a significant amount of transaction
                data.
              </p>

              <div className="flex items-center space-x-4">
                <span className="relative ml-auto flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>

                <span className="mt-auto font-mono text-[80px] md:text-[122px]">
                  {transactions &&
                    Intl.NumberFormat('en', { notation: 'compact' }).format(
                      transactions
                    )}
                </span>
              </div>
            </Card>
          </div>

          <div className="relative ml-auto h-full w-full max-w-[820px] border border-border bg-[#0C0C0C] p-6">
            <h2 className="mb-24 block text-[38px] font-medium">
              What people say
            </h2>

            <div className="absolute bottom-6 left-[50%] -ml-[110px] -mt-5 flex w-[220px] justify-center">
              <a
                href="https://twitter.com/search?q=midday.ai&src=typed_query&f=top"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="flex h-10 w-full items-center space-x-2">
                  <span>More posts on</span>
                  {/* <FaXTwitter /> */}
                </Button>
              </a>
            </div>

            <Image src={customers} width={698} alt="Customers" quality={90} />
          </div>
        </div>
      </div>
    </div>
  )
}
