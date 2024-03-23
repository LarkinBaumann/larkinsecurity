import Image from 'next/image'
import React from 'react'
import ShadowTop from './Shadows/ShadowTop'
import ShadowBottom from './Shadows/ShadowBottom'

function Elige() {
  return (
    <div className='w-full h-[700px] flex flex-col items-center justify-center text-white px-4 relative '>
      <ShadowTop/>
      <ShadowBottom/>
      <Image src="/assets/servicios/elige.png" layout='fill' objectFit='cover' alt="Hero Servicios" className='absolute bottom-0 -z-10'/>
        <div className='w-full h-[524px] flex flex-col items-center justify-center border-[1px] border-[#1777BA] rounded-[12px] gap-[38px] z-10 '>
            <div className='w-full  flex flex-col items-center justify-center relative'>
                <Image src="/assets/servicios/elige/1.png" width={100}
                height={100} alt="Elige Servicios" className='w-[72px] h-[72px] absolute bottom-0 left-[20%]'/>
                <Image src="/assets/servicios/elige/2.png" width={100}
                height={100} alt="Elige Servicios" className='w-[218px] h-[218px]'/>
                <Image src="/assets/servicios/elige/3.png" width={100}
                height={100} alt="Elige Servicios" className='w-[104px] h-[104px] absolute top-0 right-[15%]'/>
            </div>
            <div className='flex flex-col gap-[10px]'>
            <div className='text-[35px] text-center font-extrabold font-header leading-[39px]'>
                <h2>Elige nuestros <br/> <span className='tituloServicios3'>servicios</span></h2>
                
            </div>
            <p className='text-center font-paragraph text-[11px] font-medium leading-[18px] px-16'>
            Nuestros servicios están respaldados por años de experiencia y dedicación. Nos esforzamos por ofrecerte lo mejor en todo momento. Confía en nosotros para brindarte lo mejor en seguridad. 
            <br/>
¡Haz la elección inteligente y elige nuestros  servicios hoy mismo!
            </p>

        </div>
        </div>

    </div>
  )
}

export default Elige