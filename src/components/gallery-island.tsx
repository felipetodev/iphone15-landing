import { motion } from 'framer-motion'

interface Props {
  gallery: Array<{ title: string, video: string }>
  position: number
  videoInfo: { currentTime: number, duration: number }
}

function GalleryIsland ({
  gallery,
  position,
  videoInfo
}: Props) {
  return (
    <div className='absolute top-0 w-full h-full flex items-end justify-center pointer-events-none z-30'>
      <div className='sticky bottom-0 mx-auto flex'>
        <div className='my-8'>
          <div className='flex items-center pointer-events-auto'>{/* gap-6 */}
            <div className='rounded-full bg-[#424245b3] '>
              <ul className='flex h-14 gap-x-4 justify-center items-center px-7'>
                {Array.from({ length: gallery.length }).map((_, index) => (
                  <li
                    key={index}
                    className='flex relative overflow-hidden'
                  >
                    <motion.button
                      initial={{ width: (position === 0 && index === 0) ? '70px' : '8px' }}
                      animate={{ width: (position === index) ? '70px' : '8px' }}
                      exit={{ width: '8px' }}
                      className='min-h-[8px] rounded-full bg-[#f5f5f7cc]'
                    />
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{
                        width: (position === index) ? `${(videoInfo.currentTime / videoInfo.duration) * 100}%` : 0
                      }}
                      exit={{ width: 0 }}
                      className='absolute inset-0 h-full rounded-full bg-[#f5f5f7]'
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-[#424245b3] rounded-full ml-6'>{/* ml-6 */}
              <span className='text-apple-white'>
                <svg className='w-14 h-14' viewBox="0 0 56 56">
                  <path fill='currentColor' d="M20.8,36V20c0-1.6,1-2.5,2.3-2.5c0.7,0,1.1,0.1,1.7,0.5l13.4,7.7c1.2,0.7,1.8,1.2,1.8,2.3 c0,1.1-0.6,1.6-1.8,2.3L24.8,38c-0.6,0.4-1,0.5-1.7,0.5C21.8,38.5,20.8,37.6,20.8,36"></path>
                </svg>
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryIsland
