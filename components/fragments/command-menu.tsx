'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Circle } from 'lucide-react'
import { useTheme } from 'next-themes'

import { siteConfig } from '@/config/site'
import { Badge } from '@/components/ui/badge'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  //   CommandShortcut,
} from '@/components/ui/command'
import { Icons } from '@/components/ui/icons'

interface CommandMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  withoutInitialUI?: boolean
}

export function CommandMenu({ ...props }: CommandMenuProps) {
  const [open, setOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      {props.withoutInitialUI ? null : (
        <Icons.command
          className="w-5 cursor-pointer text-tertiary-foreground"
          strokeWidth={1.5}
          onClick={() => setOpen(true)}
        />
      )}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme('light'))}>
              <Icons.sun className="mr-2 h-4 w-4" />
              Light
              {theme === 'light' && (
                <Badge variant="outline" className="ml-3">
                  Current
                </Badge>
              )}
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('dark'))}>
              <Icons.moon className="mr-2 h-4 w-4" />
              Dark
              {theme === 'dark' && (
                <Badge variant="outline" className="ml-3">
                  Current
                </Badge>
              )}
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('system'))}>
              <Icons.laptop className="mr-2 h-4 w-4" />
              System
              {theme === 'system' && (
                <Badge variant="outline" className="ml-3">
                  Current
                </Badge>
              )}
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Pages">
            {siteConfig.navLinks.map((link) => (
              <CommandItem
                key={link.href}
                value={link.label}
                onSelect={() => {
                  runCommand(() => router.push(link.href as string))
                }}
              >
                <div className="mr-2 flex h-4 w-4 items-center justify-center">
                  <Circle className="h-3 w-3" />
                </div>
                {link.label}
                {/* <CommandShortcut>⌘{link.label[0]}</CommandShortcut> */}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
