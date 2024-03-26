import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import ShadowTop from './Shadows/ShadowTop'
import ShadowRight from './Shadows/ShadowRight'
import ShadowLeft from './Shadows/ShadowLeft'
import { useMediaQuery } from 'react-responsive'

function Hero() {
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div className='w-full h-screen relative z-0'>
      <ShadowTop/>
      <ShadowRight/>
      <ShadowLeft/>
        <Image src={"/assets/servicios/hero.png" } layout='fill' objectFit='cover' alt="Hero Servicios"
        className='w-full h-full lg:hidden object-cover absolute -z-20'
        />
        <Image src={"/assets/servicios/heroLg.png" } layout='fill' objectFit='cover' alt="Hero Servicios"
        className='hidden lg:block w-full h-full object-cover absolute -z-20'
        />
        <div className='w-full h-full flex flex-col justify-center items-center lg:items-start px-8 md:px-32 lg:px-10 text-white lg:gap-4 '>
            <h2 className='text-[35px] md:text-[60px] lg:text-[66px] font-header text-center lg:text-left leading-[39px] md:leading-[75px] font-extrabold z-10 lg:w-[708px] lg:mt-[100px]'>
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