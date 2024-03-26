import Image from 'next/image'
import React from 'react'

function ValoresCard({titulo, parrafo,icono, texto}) {
  return (
    <div className={`w-[103px] lg:w-[359px] h-[108px] lg:h-[494px] rounded-[6px] border-[0.3px] border-[#55B0F0] bg-[#0E1921] flex flex-col gap-[4px] justify-center items-center lg:rounded-[18px]
    ${parrafo == 'Excelencia' && "lg:translate-y-[50px]"}
    `}>
          <div className='w-[53px] lg:w-[105px] h-[53px] lg:h-[152px]'>
          <Image  src={icono} alt="Email" width={100} height={100} className='w-full h-full object-contain  ' />
          </div>
          
          <div className='w-full flex flex-col lg:gap-[21px]'>
            <div>
          <h4 className='text-[12px] lg:text-[21px] text-center font-semibold font-paragraph'>{titulo}</h4>
          <p className='text-[12px] lg:text-[21px] text-center font-paragraph '>{parrafo}</p>
            </div>
          <p className='hidden lg:block text-[15px]  text-center leading-[25px] font-extrabold px-4 font-paragraph'>
            {texto}
          </p>
          </div>
        </div>
  )
}

export default ValoresCard