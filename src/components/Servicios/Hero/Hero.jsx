import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import ShadowTop from './Shadows/ShadowTop'
import ShadowRight from './Shadows/ShadowRight'
import ShadowLeft from './Shadows/ShadowLeft'

function Hero() {
  return (
    <div className='w-full h-screen relative z-0'>
      <ShadowTop/>
      <ShadowRight/>
      <ShadowLeft/>
        <Image src="/assets/servicios/hero.png" layout='fill' objectFit='cover' alt="Hero Servicios"
        className='w-full h-full object-cover absolute -z-20'
        />
        <div className='w-full h-full flex flex-col justify-center items-center px-8 md:px-32 text-white'>
            <h2 className='text-[35px] md:text-[60px] lg:text-[66px] font-header text-center leading-[39px] md:leading-[75px] font-extrabold z-10'>
            Descubre cómo nuestros servicios  pueden salvaguardar tu <span className='tituloServicios1 '>tranquilidad</span> y <span className='tituloServicios1'>patrimonio</span>
            </h2>
            <Button
            text={'Ver más'}
            />
        </div>

    </div>
  )
}

export default Hero