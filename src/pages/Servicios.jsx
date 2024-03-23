import Elige from '@/components/Servicios/Elige/Elige'
import Hero from '@/components/Servicios/Hero/Hero'
import ServiciosSec from '@/components/Servicios/ServiciosSec/ServiciosSec'
import Image from 'next/image'
import React from 'react'

function Servicios() {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <div className='w-full h-full relative'>

      <ServiciosSec/>
      <Image src="/assets/servicios/serviciossec.png" width={100} height={100} alt="Hero Servicios" className='w-full h-full absolute top-0 -z-20'/>
      </div>
      <Elige/>
    </div>
  )
}

export default Servicios