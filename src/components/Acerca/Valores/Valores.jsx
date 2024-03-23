import React from 'react'
import ValoresCard from './ValoresCard'

function Valores() {
  return (
    <div
    className='w-full h-full flex flex-col items-center justify-center text-white px-4  '
    >
    
    <h2 className='text-[25px] font-header font-extrabold'>
        Valores
    </h2>
    <p className='text-[9px] font-paragraph font-semiblack leadong-[15px] text-center'>
    Basados en los siguientes valores nos comprometemos a seguir siendo un referente en seguridad y protección para aquellos que confían en nosotros.
    </p>
    <div className='w-full h-full flex flex-row justify-center items-center'>
        <ValoresCard
        icono={'/assets/icons/innovacion.png'}
        titulo={'Visión Global e'}
        parrafo={'Innovacion'}
        />
        <ValoresCard
        icono={'/assets/icons/compromiso.png'}
        titulo={'Visión Global e'}
        parrafo={'Innovacion'}
        />
        <ValoresCard
        icono={'/assets/icons/integridad.png'}
        titulo={'Visión Global e'}
        parrafo={'Innovacion'}
        />
    </div>
    </div>
  )
}

export default Valores