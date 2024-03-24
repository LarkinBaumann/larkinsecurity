import React from 'react'
import Button from '../../Button'
import Image from 'next/image'
import ShadowTop from './Shadows/ShadowTop'

function Acerca() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center relative'>
      <ShadowTop/>

      <div className='w-full h-[300px] flex flex-row justify-center items-center relative'>

        <div className='w-full h-[350px] absolute left-[0%] top-[35px] z-0'>
            <Image src='/assets/home/acerca/fondo.png' width={2000} height={2000} alt='Acerca de nosotros' className='w-full h-full' />
        </div>
        <div className='w-[700px] h-[200px] flex flex-col items-center justify-center'>
          <div className='flex w-full justify-center items-center'>


      <div className='w-[222px] h-[189px] translate-x-[30%]  z-20'>
            <Image src='/assets/home/acerca/1.png' width={1920} height={1080} alt='Acerca de nosotros' className='w-full h-full' />
        </div>
        <div className='w-[222px] h-[189px] -translate-x-[20%] translate-y-[20%]  z-10'>
            <Image src='/assets/home/acerca/2.png' width={1920} height={1080} alt='Acerca de nosotros' className='w-full h-full' />
        </div>
          </div>
        </div>
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center  text-white text-center gap-[15px]'>
            <h2 className='font-header text-[30px] font-black leading-[32px] w-[95%] z-10 '>
                Garantizamos tu tranquilidad con seguridad de <span className='titulo3'>primera calidad</span>
            </h2>
            <p className='text-[13px] font-paragraph leading-[22px] z-20 px-4'>
            Nuestro equipo altamente capacitado y comprometido está dedicado a salvaguardar tu entorno, con una amplia gama de soluciones adaptadas a tus necesidades específicas, nos aseguramos de que puedas concentrarte en lo importante, mientras nosotros nos encargamos de tu seguridad.
            </p>
            <div className='z-20'>
            <Button
            text={"Servicios"}
            />
            </div>
        </div>
    </div>
  )
}

export default Acerca