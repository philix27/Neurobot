import type { ReactNode } from 'react'

export const CoreWrapper = (props: { children: ReactNode }) => {
  return <div className="no-scrollbar  overflow-y-scroll px-3 h-screen mt-[50px]">{props.children}</div>
}
