import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='w-full h-screen relative'>
        <Image src="/assets/servicios/hero/hero.png" layout='fill' objectFit='cover' alt="Hero Servicios"
        className='w-full h-full object-cover'
        />

    </div>
  )
}

export default Hero