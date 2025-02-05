import { Body } from './zhome/Hero'
import { AppHeader } from './zhome/Header'
import { Footer } from './zhome/Footer'

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col justify-between bg-background">
      <AppHeader />
      <Body />
      <Footer />
    </div>
  )
}
