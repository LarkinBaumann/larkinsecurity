import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div
    className='text-white w-full h-screen flex flex-col items-center justify-center gap-[55px]'
    >
      <div className='w-full flex flex-col items-center text-center'>
        <h2 className='text-[38px] font-header font-black leading-[42px]'>
          Tu seguridad es
        </h2>
        <h2 className='text-[38px] font-header font-black leading-[42px] tituloAcerca1'>
          nuestra misión;
        </h2>
        <h2 className='text-[38px] font-header font-black leading-[42px]'>
          Tu tranquilidad,
        </h2>
        <h2 className='text-[38px] font-header font-black leading-[42px]  tituloAcerca2'>
          nuestra garantía.
        </h2>

      </div>
      <div>
        <Image src="/assets/acerca/hero/hero.png" width={1000} height={1000} alt="Hero Acerca" className='w-[295px] h-[295px]' />
      </div>
      
    </div>
  )
}

export default Hero