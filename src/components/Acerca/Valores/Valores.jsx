import React, { useContext } from 'react'
import ValoresCard from './ValoresCard'
import Shadow from './Shadows/Shadow'
import { AppContext } from '@/Context/AppContext'

function Valores() {
  const {traduccion} = useContext(AppContext)

  return (
    <div
    className='w-full h-[250px] md:h-[400px] lg:h-[900px] flex flex-col items-center justify-center text-white  mt-8 relative z-10 '
    >
      <Shadow/>
    <div className='flex flex-col justify-center items-center '>
    <h2 className='text-[25px] md:text-[40px] lg:text-[60px] font-header font-extrabold'>
        {traduccion.valores.header}
    </h2>
    <p className='text-[11px] md:text-[20px]  font-paragraph font-semiblack leading-[15px]  md:leading-[34px] lg:leading-[30px]  text-center lg:px-[150px] px-8 '>
    {traduccion.valores.paragraph}
    </p>
  
    </div>
    
    <div className='w-full flex flex-row justify-center items-center gap-[11px] mt-8'>
        <ValoresCard
        icono={'/assets/icons/innovacion2.png'}
        titulo={traduccion.valores.valorCardHeader1}
        parrafo={traduccion.valores.valorCardHeader12}
        texto = {traduccion.valores.valorCardParagraph1}
        />
        <ValoresCard
        icono={'/assets/icons/compromiso2.png'}
        titulo={traduccion.valores.valorCardHeader2}
        parrafo={traduccion.valores.valorCardHeader22}
        texto = {traduccion.valores.valorCardParagraph2}
        />
        <ValoresCard
        icono={'/assets/icons/integridad2.png'}
        titulo={traduccion.valores.valorCardHeader3}
        parrafo={traduccion.valores.valorCardHeader32}
        texto = {traduccion.valores.valorCardParagraph3}
        />
    </div>
    </div>
  )
}

export default Valores