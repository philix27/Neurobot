import type { IViews } from 'lib/zustand/screens'
import { Inbox, BadgeDollarSign, File, Group, type LucideIcon } from 'lucide-react'

export const navData: {
  title: string
  label?: string | undefined
  icon: LucideIcon
  variant: 'default' | 'ghost'
  view: IViews
}[] = [
  {
    title: 'Inbox',
    label: '128',
    icon: Inbox,
    variant: 'default',
    view: 'INBOX',
  },
  {
    title: 'Bots',
    label: '9',
    icon: File,
    variant: 'ghost',
    view: 'BOTS',
  },
  {
    title: 'Group',
    label: '',
    icon: Group,
    variant: 'ghost',
    view: 'GROUPS',
  },
  {
    title: 'Market',
    label: '',
    icon: BadgeDollarSign,
    variant: 'ghost',
    view: 'MARKET',
  },
]
