import Image from 'next/image'
import React from 'react'

function Servicio() {
  return (
    <div className='text-white w-full h-full flex flex-col'>
      <div className='w-full h-full flex flex-row justify-center '>
        <div className='h-full flex flex-col justify-end'>
          <Image src="/assets/servicio/escudo1.png" alt="Escudo" width={1000} height={1000} className='w-[123px] h-[126px]' />
        </div>
        <div className='h-full flex flex-col justify-start'>
          <Image src="/assets/servicio/escudo1.png" alt="Escudo" width={1000} height={1000}
          className='w-[182px] h-[197px]'
          />
        </div>
        <div className='h-full flex flex-col justify-end'>
          <Image src="/assets/servicio/escudo1.png" alt="Escudo" width={1000} height={1000} 
          className='w-[123px] h-[126px]'
          />
        </div>

      </div>
    </div>
  )
}

export default Servicio