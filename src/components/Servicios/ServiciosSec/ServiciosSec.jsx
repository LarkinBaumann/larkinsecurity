import React from 'react'
import Carrousel from './Carrousel'
import ShadowTop from './Shadows/ShadowTop'
import Image from 'next/image'

function ServiciosSec() {
  return (
    <div
    className='w-full h-[600px] flex flex-col items-center justify-center text-white px-4 pt-8 gap-[37px]  relative'
    >
      
      <ShadowTop/>
        <h2 className='text-[35px] font-header font-extrabold'>Servicios</h2>
        <Carrousel/>
        </div>
  )
}

export default ServiciosSec