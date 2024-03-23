import Image from 'next/image'
import React from 'react'
import Mapa from './Mapa'
import ShadowTop from './Shadows/ShadowTop'
import ShadowMapa from './Shadows/ShadowMapa'

function Servicio() {
  return (
    <div className='text-white w-full h-full flex flex-col gap-[30px] relative'>
      <Image src="/assets/home/servicio/fondo.png"  width={1000} height={1000} className='w-full h-[350px] absolute ' alt='fondo servicio'/>
      <ShadowTop/>
      <div className='w-full h-full flex flex-row justify-center px-4 '>
        <div className='h-[250px] flex flex-col justify-end relative '>
          <Image src="/assets/home/servicio/escudo1.png" alt="Escudo" width={1000} height={1000} className='w-full h-[126px]' />
          <div className='flex flex-col text-center w-full absolute top-[65%] text-[12px] font-paragraph leading-[15px]'>
          <p className='font-extrabold'>Visión global</p>
          <p className='font-light'>e innovación</p>
          </div>
        </div>
        <div className='h-full flex flex-col justify-start relative z-10'>
          <Image src="/assets/home/servicio/escudo1.png" alt="Escudo" width={1000} height={1000}
          className='w-full h-[197px]'
          />
          <div className='flex flex-col text-center w-full absolute top-[35%] text-[14px] font-paragraph leading-[15px]'>
          <p className='font-extrabold'>Compromiso con</p>
          <p className='font-light'>la excelecia</p>
          </div>
        </div>
        <div className=' flex flex-col justify-end relative'>
          <Image src="/assets/home/servicio/escudo1.png" alt="Escudo" width={1000} height={1000} 
          className='w-full h-[126px]'
          />
           <div className='flex flex-col text-center w-full absolute top-[65%] text-[12px] font-paragraph leading-[15px]'>
          <p className='font-extrabold'>Integridad y</p>
          <p className='font-light'>Confianza</p>
          </div>
        </div>

      </div>
      <div className='w-full z-20 relative'>
       
        <ShadowMapa/>
        <Image src="/assets/home/servicios/fondo.png" alt="Escudo" width={1000} height={1000} className='w-full h-[570px] absolute -z-10' />

      <Mapa/>
      </div>
    </div>
  )
}

export default Servicio