import Image from 'next/image'
import React from 'react'

function ValoresCard({titulo, parrafo,icono}) {
  return (
    <div className='w-[103px] h-[108px] rounded-[6px] border-[0.3px] border-[#55B0F0] bg-[#0E1921] flex flex-col gap-[4px] justify-center items-center'>
          <div className='w-[53px] h-[53px]'>
          <Image  src={icono} alt="Email" width={100} height={100} className='w-[56px] h-[53px] object-contain ' />
          </div>
          
          <div className='w-full flex flex-col'>

          <h4 className='text-[12px] text-center font-semibold font-paragraph'>{titulo}</h4>
          <p className='text-[12px] text-center font-paragraph '>{parrafo}</p>
          </div>
        </div>
  )
}

export default ValoresCard