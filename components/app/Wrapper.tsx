import { ReactNode } from 'react'

export const CoreWrapper = (props: { children: ReactNode }) => {
  return (
    <div className="no-scrollbar h-screen overflow-y-scroll px-3 pb-[100px] pt-[60px]">
      {props.children}
    </div>
  )
}
