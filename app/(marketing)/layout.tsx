// import { MarketingFooter } from '@/components/fragments/marketing-footer'
import { MarketingHeader } from '@/components/fragments/marketing-header'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingHeader />
      <div className="flex-1">{children}</div>
      {/* <MarketingFooter /> */}
    </div>
  )
}
