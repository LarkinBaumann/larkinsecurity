import AcercaDe from '@/components/Acerca/AcercaDe/AcercaDe'
import Hero from '@/components/Acerca/Hero/Hero'
import Valores from '@/components/Acerca/Valores/Valores'
import Image from 'next/image'
import React from 'react'

function Acerca() {
  return (
    <div className='w-full h-full px-4 relative overflow-hidden max-w-[1440px] min-w-sm mx-auto'>
      <div className='w-full h-full absolute -z-10 '>
      <Image src={'/assets/acerca/hero/fondo.png'} alt='fondo' width={1000} height={1000} className='w-full h-full ' />
      </div>
        <Hero/>
        <AcercaDe/>
        <Valores/>
    </div>
  ) 
}

export default Acerca