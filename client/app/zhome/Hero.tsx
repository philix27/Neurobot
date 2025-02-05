'use client'
import { Button } from 'components/ui/button'
import { useRouter } from 'next/navigation'

export function Body() {
  const router = useRouter()
  return (
    <div className="mt-[70px] flex h-full  w-full bg-background">
      <div className="w-full  px-8 py-5 md:px-20 md:py-10">
        <div className="wow fadeInUp mx-auto w-full flex-col gap-y-4" data-wow-delay=".2s">
          <h1 className="md: mb-5 max-w-[100%] text-3xl font-bold leading-tight  sm:text-4xl sm:leading-tight md:max-w-[45%] md:text-5xl md:leading-tight">
            Fast paced learning for Ai Agents
          </h1>
          <p className="mb-12 max-w-[95%] !leading-relaxed  sm:text-lg md:max-w-[45%] md:text-xl">
            Clear your pre and post registration exams with over 2,000 quizzes and courses.
          </p>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button onClick={() => router.push('/app')}> Get started</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
