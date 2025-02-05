'use client'

import * as React from 'react'
import { cn } from 'lib/utils'
import { Nav } from './nav'
import { TooltipProvider } from 'components/ui/tooltip'
import { ResizablePanelGroup, ResizablePanel } from 'components/ui/resizable'
import { navData } from './navData'
import PanelInbox from '../PanelInbox'
import { AppStores } from 'lib/zustand'
import type { IViews } from 'lib/zustand/screens'
import PanelBot from '../PanelBot'
import { Separator } from 'components/ui/separator'

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
  defaultLayout = [20, 32, 48],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const store = AppStores.useView()
  const settingsStore = AppStores.useSettings()
  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          settingsStore.update({ defaultLayout: sizes })
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
            settingsStore.update({ defaultCollapsed: true })
            // document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
          }}
          onResize={() => {
            setIsCollapsed(false)
            settingsStore.update({ defaultCollapsed: false })
            // document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
          }}
          className={cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')}
        >
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
