function HightlightsHeader () {
  return (
    <header className='flex justify-between items-baseline pt-[200px] pb-10 max-w-7xl mx-auto'>
    <div>
      <h2 className='text-[52px] text-apple-softGray font-semibold'>
        Get the highlights.
      </h2>
    </div>
    <div>
      <ul className='flex gap-x-7 text-apple-blueLink text-xl'>
        <li>
          <a href="#" className='hover:underline underline-offset-2'>
          Watch the film
          </a>
        </li>
        <li>
          <a href="#" className='hover:underline underline-offset-2'>
            Watch the event
          </a>
          {' '}
          <span>
            {'>'}
          </span>
        </li>
      </ul>
    </div>
  </header>
  )
}

export default HightlightsHeader
