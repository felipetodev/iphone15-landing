import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function Island ({ isInView }: { isInView: boolean }) {
  const [play, setPlay] = useState(true)

  useEffect(() => {
    const sleep = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms))
    sleep(400).then(() => setPlay(false))
  }, [isInView])

  const plusDot = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.15,
        delay: 0.5
      }
    }
  }

  return (
    <div className='absolute top-0 w-full h-full flex items-end justify-center pointer-events-none z-30'>
      <div className='sticky bottom-0 mx-auto flex'>
        <div className='my-8'>
          <div className='relative flex items-center pointer-events-auto'>{/* gap-6 */}
            <motion.div
              className='z-10 rounded-full bg-[#424245b3] h-14 flex justify-center items-center'
              initial={{
                opacity: 0,
                scale: 0,
                width: '56px'
              }}
              animate={{
                opacity: 1,
                scale: 1,
                width: play ? '56px' : 'auto',
                transition: {
                  duration: 0.3
                }
              }}
              // exit={{
              //   width: '56px',
              //   transition: { duration: 0.9 }
              // }}
            >
              <AnimatePresence>
                {!play && (
                  <>
                      {(
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.9 } }}
                          exit={{
                            opacity: 0,
                            scale: 0,
                            transition: {
                              duration: 0,
                              delay: 0,
                              when: 'beforeChildren'
                            }
                          }}
                          className='text-apple-white text-lg ml-6 mr-1 overflow-hidden'
                        >
                          More on design & display
                        </motion.span>
                      )}
                  </>
                )}
              </AnimatePresence>
              <motion.span
                initial='hidden'
                animate='show'
                variants={plusDot}
                className='text-apple-white bg-apple-blue rounded-full mx-2.5'
              >
                <svg className='h-9 w-9' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                  <path fill='currentColor' id="_art" className="st1" d="M25.5,16.5l-5.9,0l0-5.9C19.6,9.7,18.9,9,18,9c-0.9,0-1.5,0.7-1.5,1.5l0,5.9l-5.9,0h0
                    C9.7,16.4,9,17.1,9,18c0,0.9,0.7,1.5,1.5,1.5l5.9,0l0,5.9c0,0.9,0.7,1.5,1.5,1.5c0.9,0,1.5-0.7,1.5-1.5l0-5.9l5.9,0h0
                    c0.9,0,1.5-0.7,1.5-1.5C27,17.2,26.3,16.5,25.5,16.5L25.5,16.5z"
                  />
                </svg>
              </motion.span>
            </motion.div>

            <AnimatePresence>
              {play && (
                <motion.div
                  className='absolute flex left-0 right-0 bottom-0 top-0 bg-apple-blue rounded-full'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1.8 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Island
