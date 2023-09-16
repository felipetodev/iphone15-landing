import { useState } from 'react'
import { motion } from 'framer-motion'

function WelcomeHero () {
  const [isLoading, setIsLoading] = useState(false)

  const variants = {
    loading: { opacity: 0, translateY: 40 },
    loaded: { opacity: isLoading ? 1 : 0, translateY: 0 }
  }
  return (
      <section className='flex justify-between flex-col h-[calc(100vh-100px)]'>
        <div className='relative flex flex-col items-center my-auto'>
          <h1 className='absolute -top-2 text-apple-titanium text-2xl lg:text-[28px] font-semibold'>
            iPhone 15 Pro
          </h1>
          <div className='max-w-5xl lg:max-w-7xl'>
            <video
              muted
              autoPlay
              playsInline
              src='/titanium.mp4'
              onTimeUpdate={(e) => {
                if (e.currentTarget.currentTime > 0.64) {
                  setIsLoading(true)
                }
              }}
            />
            {/* picture */}
          </div>
        </div>
        <div className='flex flex-col items-center mb-[30px] md:mb-[70px] lg:mb-[100px]'>
          <motion.a
            className='py-2.5 px-5 font-medium rounded-full bg-apple-blue text-apple-white mb-[30px] cursor-pointer'
            variants={variants}
            initial='loading'
            animate='loaded'
            transition={{ duration: 0.9 }}
          >
            View pricing
          </motion.a>
          <motion.span
            className='text-xl font-semibold mb-5'
            variants={variants}
            initial='loading'
            animate='loaded'
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            From $999 or $41.62/mo. for 24 mo.
          </motion.span>
          <motion.span
            className='text-apple-softGray font-semibold'
            variants={variants}
            initial='loading'
            animate='loaded'
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Pre-order starting at 5:00 a.m. PDT on 9.15
          </motion.span>
          <motion.span
            className='text-apple-softGray font-semibold'
            variants={variants}
            initial='loading'
            animate='loaded'
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Available starting 9.22
          </motion.span>
        </div>
      </section>
  )
}
export default WelcomeHero
