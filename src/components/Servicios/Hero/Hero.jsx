import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='w-full h-screen relative'>
        <Image src="/assets/servicios/hero.png" layout='fill' objectFit='cover' alt="Hero Servicios"
        className='w-full h-full object-cover absolute -z-10'
        />
        <div className='w-full h-full flex flex-col justify-center items-center px-8 text-white'>
            <h2 className='text-[35px] font-header text-center leading-[39px] font-extrabold '>
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