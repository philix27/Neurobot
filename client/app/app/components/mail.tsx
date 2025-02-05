'use client'

import * as React from 'react'
import { cn } from 'lib/utils'
import { AccountSwitcher } from './account-switcher'
import { Nav } from './nav'
import { TooltipProvider } from 'components/ui/tooltip'
import { ResizablePanelGroup, ResizablePanel } from 'components/ui/resizable'
import { Separator } from '@radix-ui/react-select'
import { navData } from './navData'
import PanelInbox from '../PanelInbox'
import { AppStores } from 'lib/zustand'
import type { IViews } from 'lib/zustand/screens'
import PanelBot from '../PanelBot'

interface MailProps {
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
  mails: any[]
  // mails: Mail[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function Mail({
  accounts,
  defaultLayout = [20, 32, 48],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const store = AppStores.useView()
  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(sizes)}`
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
          }}
          onResize={() => {
            setIsCollapsed(false)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
          }}
          className={cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')}
        >
          <div
            className={cn(
              'flex h-[52px] items-center justify-center',
              isCollapsed ? 'h-[52px]' : 'px-2',
            )}
          >
            <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
          </div>
          <Separator />
          <Nav isCollapsed={isCollapsed} links={navData} />
          <Separator />
        </ResizablePanel>
        <ActiveView activeScreen={store.activeScreen} />
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}

function ActiveView(props: { activeScreen: IViews }) {
  switch (props.activeScreen) {
    case 'INBOX':
      return <PanelInbox />
    case 'BOTS':
      return <PanelBot />
    default:
      return <PanelInbox />
  }
}
