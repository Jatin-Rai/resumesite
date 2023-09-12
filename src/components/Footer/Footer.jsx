import React from 'react'

const Footer = () => {

  const date = new Date().getFullYear()


  return (
    <footer className='self-center sm:self-end pt-16 sm:pr-28 dark:bg-cyan-950 text-gray-600 dark:text-gray-400'>
      <div>
        <p className='capitalize'>&copy;{date} <span className='text-red-500 dark:text-cyan-300'>jatin rai</span>. all rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer