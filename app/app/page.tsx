'use client'
import React from 'react'
// import { CoreWrapper } from 'components/Wrapper'
import TopNav from 'components/TobNav'
import { useRouter } from 'next/navigation'
import MailPage from './mail/pageMail'
import { CoreWrapper } from 'components/app/Wrapper'

export default function Page() {
  const router = useRouter()
  return (
    <>
      <TopNav title="" />
      <CoreWrapper>
        <MailPage />
      </CoreWrapper>
    </>
  )
}
