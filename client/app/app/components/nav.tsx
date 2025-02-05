'use client'

import type { LucideIcon } from 'lucide-react'

import { cn } from 'lib/utils'
import { buttonVariants } from 'components/ui/button'
import { Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip'
import { AppStores } from 'lib/zustand'
import type { IViews } from 'lib/zustand/screens'

interface NavProps {
  isCollapsed: boolean
  links: {
    title: string
    label?: string
    icon: LucideIcon
    variant: 'default' | 'ghost'
    view: IViews
  }[]
}

export function Nav({ links, isCollapsed }: NavProps) {
  const store = AppStores.useView()
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <p
                  className={cn(
                    buttonVariants({ variant: link.variant, size: 'icon' }),
                    'h-9 w-9',
                    link.variant === 'default' &&
                      'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
                  )}
                  onClick={() => {
                    store.update({ activeScreen: link.view })
                  }}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </p>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && <span className="ml-auto text-muted-foreground">{link.label}</span>}
              </TooltipContent>
            </Tooltip>
          ) : (
            <p
              key={index}
              className={cn(
                buttonVariants({ variant: link.variant, size: 'sm' }),
                'justify-start hover:bg-card hover:text-foreground',
                store.activeScreen === link.view ? 'bg-primary text-white' : ' bg-background text-muted',
              )}
              onClick={() => {
                store.update({ activeScreen: link.view })
              }}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    'ml-auto',
                    link.variant === 'default' && 'text-background dark:text-white',
                  )}
                >
                  {link.label}
                </span>
              )}
            </p>
          ),
        )}
      </nav>
    </div>
  )
}
