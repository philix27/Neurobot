import React from 'react'
import DesktopNav from './NavDesktop'
import MobileNav from './NavMobile'

export default function BottomNavbar() {
  return (
    <div>
      <div className="hidden">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  )
}
