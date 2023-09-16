'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Navbar from '@/components/navbar'
import WelcomeHero from '@/components/welcome-hero'
import HighlightsGallery from '@/components/highlights-gallery'

export default function Home () {
  const chivoRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(chivoRef, { margin: '-200px' })
  const [position, setPosition] = useState(0)
  const videoRef = useRef<HTMLVideoElement[]>([])

  useEffect(() => {
    if (videoRef.current == null) return

    const activeView = videoRef.current[position]

    if (isInView && !activeView.ended) {
      activeView.play()
    }

    if (!isInView && !activeView.ended) {
      activeView.pause()
    }

    videoRef.current.forEach((item, index) => {
      if (index !== position) {
        item.pause()
      }
    })
  }, [isInView, position])

  const handlePosition = (pos: number) => {
    setPosition(pos)
  }

  return (
    <main className=''>
      <Navbar isInView={isInView} />
      <WelcomeHero />
      <HighlightsGallery
        chivoRef={chivoRef}
        videoRef={videoRef}
        position={position}
        onHandlePosition={handlePosition}
      />
      <section className='flex text-4xl justify-center items-center h-[500px] '>
        Under Construction 🚧
      </section>
    </main>
  )
}
