import { useState, useRef } from 'react'
import HightlightsHeader from './highlights-header'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import GalleryIsland from './gallery-island'

interface Props {
  position: number
  chivoRef: React.MutableRefObject<HTMLDivElement | null>
  videoRef: React.MutableRefObject<HTMLVideoElement[]>
  onHandlePosition: (e: number) => void
}

const gallery = [
  {
    title: 'Enter A17 Pro.<br/>Game‑changing chip.<br/>Groundbreaking performance.',
    video: '/highlights-chip.mp4'
  },
  {
    title: 'Titanium.<br/>So strong. So light. So Pro.',
    video: '/highlights-titanium.mp4'
  },
  {
    title: 'iPhone 15 Pro Max has the<br/>longest optical zoom in<br/>iPhone ever. Far out.',
    video: '/highlights-zoom.mp4'
  }
]
const maxPosition = gallery.length - 1

function HighlightsGallery ({
  position,
  chivoRef,
  videoRef,
  onHandlePosition
}: Props) {
  const [videoInfo, setVideoInfo] = useState({
    currentTime: 0,
    duration: 0.01
  })
  const sectionRef = useRef<HTMLDivElement>(null)
  const showIslandInView = useInView(sectionRef)

  const handleVideoTime = ({ currentTarget }: React.SyntheticEvent<HTMLVideoElement>) => {
    const { currentTime, duration } = currentTarget
    setVideoInfo({ currentTime, duration })
    if (currentTime === duration && position < maxPosition) {
      const interval = setTimeout(() => {
        onHandlePosition(position + 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  }

  return (
    <section className='relative bg-apple-bgSoftGray pb-[200px]'>
      <HightlightsHeader />
      <div ref={chivoRef} className='relative overflow-hidden'>
        <div className='relative w-full mx-auto max-w-7xl flex gap-x-20'>
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ right: 0 }}
              animate={{ right: `${position * (1280 + 80)}px` }}
              transition={{ ease: 'easeInOut', duration: 0.8 }}
              className={`relative min-w-full w-full h-[680px] bg-black flex items-center rounded-[28px] overflow-hidden ${index === 1 ? 'justify-end' : 'justify-center'}`}
            >
              <div className={`absolute ${index !== 1 ? 'w-full' : 'w-auto -right-20'}`}>
                <video
                  ref={(el) => {
                    if (el != null) {
                      videoRef.current[index] = el
                    }
                  }}
                  className='w-full h-full'
                  muted
                  playsInline
                  src={item.video}
                  onTimeUpdate={handleVideoTime}
                />
              </div>
              <p
                className='absolute top-[6%] left-[3%] w-[400px] text-[26px] font-semibold'
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </motion.div>
          ))}
          <div ref={sectionRef} className='absolute top-[40%] z-[999] h-9 w-full' />
        </div>
      </div>
      {/* Island */}
      <AnimatePresence>
        {showIslandInView && (
          <GalleryIsland
            gallery={gallery}
            position={position}
            videoInfo={videoInfo}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default HighlightsGallery
