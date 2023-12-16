import { MailingListForm } from '@/components/fragments/mailing-list-form'
import { ContentCard } from '@/components/sections/content-card'
import { Hero } from '@/components/sections/hero'
import { SocialLinks } from '@/components/sections/social-links'

export default function Home() {
  return (
    <>
      <Hero
        title={'Product engineer creating internet software.'}
        includeImage
      />
      <ContentCard />
      <MailingListForm />
      <SocialLinks />
    </>
  )
}
