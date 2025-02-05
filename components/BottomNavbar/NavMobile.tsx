'use client'
import React from 'react'
import { NavItems } from './items'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileNav() {
  const pathname = usePathname()

  function isActive(url: string) {
    return pathname.includes(url)
  }
  return (
    <div className={`fixed bottom-[40px] w-full`}>
      {/* <div className={`fixed w-full ${isIOS() ? 'bottom-[40px]' : 'bottom-3'}`}> */}
      <div className="mx-2 flex items-center justify-around rounded-full bg-card px-1 py-1">
        {NavItems.map((val, i) => {
          const { Icon } = val
          return (
            <Link
              key={i}
              href={val.link}
              className={`${isActive(val.key) && 'bg-background opacity-70'} w-full rounded-full py-1`}
            >
              <div className="">
                <Icon
                  size={28}
                  className={`${isActive(val.key) ? 'text-primary' : 'text-secondary'} w-full rounded-full py-1`}
                />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
