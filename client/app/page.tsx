import { Body } from './zhome/Hero'
import { Header } from './zhome/Header'
import { Footer } from './zhome/Footer'

export default function Home() {
  return (
    <div className="h-screen w-screen bg-background flex flex-col justify-between">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
