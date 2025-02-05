'use client'
import { useRouter } from 'next/navigation'
import React, { JSX } from 'react'
import { BiChevronLeft } from 'react-icons/bi'

export default function TopNav(props: {
  title: string
  goesBack?: boolean
  Trailing?: JSX.Element
  Leading?: JSX.Element
}) {
  const { Trailing, Leading } = props
  const router = useRouter()
  return (
    <div className="fixed top-0 z-20 flex h-[50px] w-full items-center justify-between bg-background px-4 py-2">
      {props.goesBack ? (
        <BiChevronLeft
          size={25}
          onClick={() => {
            router.back()
          }}
        />
      ) : (
        <React.Fragment>{props.Leading ? Leading : <div />}</React.Fragment>
      )}

      <p className="text-sm font-semibold">{props.title}</p>
      {props.Trailing ? Trailing : <div />}
    </div>
  )
}
