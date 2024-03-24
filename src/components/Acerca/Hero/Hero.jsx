import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div
    className='text-white w-full h-screen flex flex-col items-center justify-center gap-[55px] relative'
    >
      <Image src="/assets/acerca/hero/heroShadow.svg" width={1000} height={1000} className='w-full h-full absolute top-[80px] md:top-[170px] ' alt='fondo acerca'/>
      <div className='w-full flex flex-col items-center text-center z-10'>
        <h2 className='text-[38px] md:text-[73px] font-header font-black leading-[42px] md:leading-[81px]'>
          Tu seguridad es
        </h2>
        <h2 className='text-[38px] md:text-[73px] font-header font-black leading-[42px] md:leading-[81px] tituloAcerca1'>
          nuestra misión;
        </h2>
        <h2 className='text-[38px] md:text-[73px] font-header font-black leading-[42px] md:leading-[81px]'>
          Tu tranquilidad,
        </h2>
        <h2 className='text-[38px] md:text-[73px] font-header font-black leading-[42px] md:leading-[81px]  tituloAcerca2'>
          nuestra garantía.
        </h2>

      </div>
      <div className='z-10'>
        <Image src="/assets/acerca/hero/hero.png" width={1000} height={1000} alt="Hero Acerca" className='w-[295px] h-[295px] ' />
      </div>
      
    </div>
  )
}

export default Hero