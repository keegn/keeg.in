import { NavIsland } from '@/components/fragments/nav-island'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">{children}</div>
      <NavIsland className="fixed bottom-6 self-center" />
    </div>
  )
}
