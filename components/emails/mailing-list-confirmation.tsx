import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'

interface MailingListConfirmationProps {
  urlLink?: string
}

const baseUrl =
  process.env.VERCEL_ENV === 'production'
    ? 'https://keeg.in'
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : ''

export const MailingListConfirmation = ({
  urlLink = baseUrl,
}: MailingListConfirmationProps) => (
  <Html>
    <Head />
    <Preview>Thanks for joining!</Preview>
    <Tailwind>
      <Body className="bg-white font-sans">
        <Container className="mx-auto bg-[url('/logo.png')] bg-bottom bg-no-repeat px-6 pb-12 pt-5">
          {/* <Img
            src={`${baseUrl}/logo.png`}
            width={48}
            height={52}
            alt="No image"
          /> */}
          <Heading className="mt-12 text-xl font-bold">
            You are on the list 🪄
          </Heading>
          <Section className="mx-0 my-6">
            <Text className="text-md leading-6"></Text>
            <Text className="text-md leading-6">
              Thank you for joining my mailing list. If you could do me one
              favor, drag this email over to your primary inbox that way you
              don&apos;t miss any updates. I occasionally (less than once per
              month) send out updates on interesting things I find on the
              internet and sometimes share my thoughts on the world and what
              I&apos;ve been up to.
            </Text>
          </Section>
          <Text className="text-md leading-6">
            Cheers,
            <br />- Keegan
          </Text>
          <Hr className="mt-12 text-[#dddddd]" />
          <Img
            src={`${baseUrl}/logo.png`}
            width={32}
            height={34}
            className="my-5 grayscale"
          />
          <Text className="ml-1 text-xs text-[#8898aa]">RecopyAI, LLC.</Text>
          <Text className="ml-1 text-xs text-[#8898aa]">
            1234 Main St, Suite 1234
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)
