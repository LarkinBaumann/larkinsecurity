import Image from 'next/image'
import React from 'react'

function Mapa() {
  return (
    <div className='w-full h-full px-4'>

    <div className='w-full h-[502px] flex flex-col justify-center items-center text-center rounded-[22px] border-[2px] border-[#1777BA] bg-[#07141C]
    gap-[15px]
    '>
        <div className='w-[90%]  flex flex-col items '>
        <h2 className='font-header text-[22px] font-extrabold leading-[25px] '>
            Tus Socios en Todo México:
        </h2>
        <h2 className='font-header text-[22px] font-extrabold leading-[25px] titulo5 '>
            Servicios a lo Largo y Ancho del País
        </h2>
        </div>
        <div className='w-[90%] flex flex-row justify-center'>
            <Image src="/assets/servicios/mapa.png" alt="Mapa" width={1000} height={1000} className='w-[237px] h-[229px] animate-pulse' />
        </div>
        <div className='w-[90%] flex flex-row justify-center font-paragraph text-[12px] leading-[20px]'>
        Cobertura en toda la República Mexicana,  nuestro equipo está listo para atender tus necesidades donde sea que estés. Confía en nosotros para proporcionarte soluciones confiables y de calidad en todo el país.
        </div>

    </div>
    </div>
  )
}

export default Mapa