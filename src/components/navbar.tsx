import { motion } from 'framer-motion'

const navItems = [
  'Store',
  'Mac',
  'iPad',
  'iPhone',
  'Watch',
  'AirPods',
  'TV & Home',
  'Entertainment',
  'Accessories',
  'Support'
]

function Navbar ({ isInView }: { isInView: boolean }) {
  return (
    <>
    <nav className='relative z-50 overflow-hidden bg-black'>
      <ul className='flex justify-center items-center gap-x-10 text-[10px]'>
        <li>
          <a href='#'>
            <span className='text-[#cccccc]'>
              <svg height='44' viewBox='0 0 14 44' width='14' xmlns='http://www.w3.org/2000/svg'>
                <path fill='currentColor' d='m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z' />
              </svg>
            </span>
          </a>
        </li>
        {navItems.map((item) => (
          <li key={item}>
            <a href='#'>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <motion.nav
      className='h-14 z-20 top-0 sticky bg-transparent flex justify-between items-center px-[210px] border-b border-[#ffffff3d]'
      initial={{ opacity: 0, transform: 'translateY(-50px)' }}
      animate={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0px)' : 'translateY(-50px)' }}
      transition={{ duration: 0.5 }}
    >
      <div className='absolute inset-0 backdrop-blur-lg' />
        <div className='absolute inset-0 flex justify-between items-center px-[210px]'>
          <div>
            <a href="#" className='text-xl font-semibold'>
              iPhone 15 Pro
            </a>
          </div>
          <div className='flex text-[11px]'>
            <ul className='flex gap-x-6'>
              <li>Overview</li>
              <li>Switch from Android to iPhone</li>
              <li>Tech Specs</li>
            </ul>
            <div>
              <a className='ml-4 py-1 px-2 rounded-full bg-apple-blue text-apple-white cursor-pointer'>
                View pricing
              </a>
            </div>
        </div>
      </div>
    </motion.nav>
  </>
  )
}

export default Navbar
