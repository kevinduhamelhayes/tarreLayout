import React from 'react'
import Image from 'next/image'
const Overview = () => {
  return (
    <div id='Overview' className='p-5 mt-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 md:px-24 md:py-52 '>
      <div className='items-center md:grid md:grid-cols-2'>
        <div>
          <h1 className='text-4xl font-bold text-white md:leading-snug md:text-5xl'> desarrolla tus skills</h1>
          <p className='mt-5 text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt dolor illo provident.</p>
        <div className='flex justify-start gap-4 my-10'>
          <p>Git Hub</p>
          <p>Git Hub</p>
          <p>Git Hub</p>
          <p>Git Hub</p>
          <p>Git Hub </p>
        </div>
        </div>
        <div>
          <Image src='/assets/overview.png' alt='hero' width={350} height={500} />
        </div>
      </div>

    </div>
  )
}

export default Overview