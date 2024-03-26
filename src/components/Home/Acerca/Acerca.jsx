import React from 'react'
import Button from '../../Button'
import Image from 'next/image'
import ShadowTop from './Shadows/ShadowTop'

function Acerca() {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between relative'>
      <ShadowTop/>

      <div className='w-full lg:w-[50%] h-[300px] lg:h-[500px] flex flex-row justify-center items-center relative '>

        <div className=' h-[350px] absolute left-[0%] top-[35px] z-0'>
            <Image src='/assets/home/acerca/fondo.png' width={2000} height={2000} alt='Acerca de nosotros' className='w-full h-full lg:hidden' />
        </div>
        <div className='w-[700px]  h-[200px] lg:h-full flex flex-col items-center justify-center'>
          <div className='flex w-full justify-center items-center'>


      <div className='w-[222px] lg:w-[354px] h-[189px] lg:h-[300px] translate-x-[30%] xl:translate-x-[0%] lg:-translate-y-[40%] z-20'>
            <Image src='/assets/home/acerca/3.png' width={1920} height={1080} alt='Acerca de nosotros' className='w-full h-full' />
        </div>
        <div className='w-[222px] lg:w-[354px] h-[189px] lg:h-[300px] -translate-x-[20%] xl:-translate-x-[40%] translate-y-[20%] lg:-translate-y-[10%]  z-10'>
            <Image src='/assets/home/acerca/4.png' fill={true}
          quality={100}
          priority alt='Acerca de nosotros' className='w-full h-full' />
        </div>
          </div>
        </div>
        </div>
        <div className='w-full lg:w-[50%] h-full flex flex-col items-center  justify-center  text-white text-center lg:text-left gap-[15px] px-4'>
            <h2 className='font-header text-[30px] md:text-[40px] font-extrabold leading-[32px] md:leading-[40px] w-[95%] lg:w-[482px] z-10 '>
                Garantizamos tu tranquilidad con seguridad de <span className='titulo3'>primera calidad</span>
            </h2>
            <p className='text-[13px] md:text-[20px] lg:text-[18px] md:leading-[34px] lg:w-[482px] font-paragraph leading-[22px] z-20 '>
            Nuestro equipo altamente capacitado y comprometido está dedicado a salvaguardar tu entorno, con una amplia gama de soluciones adaptadas a tus necesidades específicas, nos aseguramos de que puedas concentrarte en lo importante, mientras nosotros nos encargamos de tu seguridad.
            </p>
            <div className='w-full flex flex-row justify-center lg:justify-start items-center  z-20 '>
            <Button
            text={"Servicios"}
            />
            </div>
        </div>
    </div>
  )
}

export default Acerca