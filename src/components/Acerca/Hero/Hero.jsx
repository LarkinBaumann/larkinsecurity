import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div
    className='text-white w-full h-screen flex flex-col lg:flex-row items-center justify-center gap-[55px] lg:gap-[0px] relative'
    >
      <Image src="/assets/acerca/hero/heroShadow.svg" width={1000} height={1000} className='w-full h-full absolute top-[80px] md:top-[170px] lg:top-[50px] lg:-right-[250px] ' alt='fondo acerca'/>
      <div className='w-full flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:pl-8'>
        <h2 className='text-[38px] md:text-[73px] lg:text-[60px] xl:text-[73px] font-header font-black leading-[42px] md:leading-[81px]'>
          Tu seguridad es
        </h2>
        <h2 className='text-[38px] md:text-[73px] lg:text-[60px] xl:text-[73px]  font-header font-black leading-[42px] md:leading-[81px] tituloAcerca1'>
          nuestra misión;
        </h2>
        <h2 className='text-[38px] md:text-[73px] lg:text-[60px] xl:text-[73px] font-header font-black leading-[42px] md:leading-[81px]'>
          Tu tranquilidad,
        </h2>
        <h2 className='text-[38px] md:text-[73px] lg:text-[60px] xl:text-[73px] font-header font-black leading-[42px] md:leading-[81px]  tituloAcerca2'>
          nuestra garantía.
        </h2>

      </div>
      <div className='lg:w-full z-10'>
        <Image src="/assets/acerca/hero/hero.png" width={1000} height={1000} alt="Hero Acerca" className='w-[295px] lg:w-[500px] h-[295px] lg:h-[500px] ' />
      </div>
      
    </div>
  )
}

export default Hero