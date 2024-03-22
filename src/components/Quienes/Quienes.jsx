import React from 'react'
import Button from '../Button'

function Quienes() {
  return (
    <div className='w-full h-[540px] flex flex-col justify-center items-center text-center text-white gap-[10px] px-4'>
      <h2 className='font-header text-[40px] font-extrabold '>¿Quiénes <span className='titulo4'>somos?</span></h2>
      <p className='text-[13px] leading-[22px] '>
      Somos más que un proveedor de seguridad, somos tu socio en la protección de lo que más valoras. Confía en nosotros para garantizar tu tranquilidad y seguridad en todo momento.
      </p>
      <Button
      text={"Nosotros"}
      />

      </div>
  )
}

export default Quienes