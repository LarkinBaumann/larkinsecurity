import React from 'react'
import ValoresCard from './ValoresCard'
import Shadow from './Shadows/Shadow'

function Valores() {
  return (
    <div
    className='w-full h-[250px] flex flex-col items-center justify-center text-white px-4 mt-8 relative z-10 '
    >
      <Shadow/>
    <div className='flex flex-col justify-center items-center'>
    <h2 className='text-[25px] font-header font-extrabold'>
        Valores
    </h2>
    <p className='text-[9px] font-paragraph font-semiblack leadong-[15px] text-center'>
    Basados en los siguientes valores nos comprometemos a seguir siendo un referente en seguridad y protección para aquellos que confían en nosotros.
    </p>
  
    </div>
    
    <div className='w-full flex flex-row justify-center items-center gap-[11px] mt-8'>
        <ValoresCard
        icono={'/assets/icons/innovacion.png'}
        titulo={'Visión Global e'}
        parrafo={'Innovacion'}
        />
        <ValoresCard
        icono={'/assets/icons/compromiso.png'}
        titulo={'Compromiso con'}
        parrafo={'Excelencia'}
        />
        <ValoresCard
        icono={'/assets/icons/integridad.png'}
        titulo={'Integridad y'}
        parrafo={'Confianza'}
        />
    </div>
    </div>
  )
}

export default Valores