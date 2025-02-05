'use client'
// import { cookies } from 'next/headers'
import Image from 'next/image'
import { accounts, mails } from './data'
import { Mail } from './components/mail'

// import { Mail } from "@/app/(app)/examples/mail/components/mail"
// import { accounts, mails } from "@/app/(app)/examples/mail/data"

export default function MailPage() {
  const layout = localStorage.getItem('react-resizable-panels:layout:mail')
  const collapsed = localStorage.getItem('react-resizable-panels:collapsed')
  // const collapsed = cookies().get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed) : undefined

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
