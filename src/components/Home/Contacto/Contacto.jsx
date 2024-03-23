import Image from 'next/image'
import React from 'react'
import ContactCard from './ContactCard'
import ShadowTop from './Shadows/ShadowTop'
import ShadowBottom from './Shadows/ShadowBottom'

function Contacto() {
  return (
    <div className='text-white w-full h-full flex flex-col items-center justify-center gap-[9px] my-[44px] relative z-20'>
      <ShadowTop/>
      <ShadowBottom/>
      <div className='w-[90%] flex justify-center items-center '>
      <h2 className='font-header text-[27px] text-center font-extrabold leading-[28px] '>
      Inicia tu camino, hoy mismo. <span className='titulo6'>
        Contáctanos
      </span>
      </h2>
      </div>
      <div className='w-[68%] flex justify-center items-center'>

      <p className='text-center text-[12px] leading-[20px]'>
      En nuestro equipo, estamos aquí para ayudarte a dar el primer paso hacia tus metas. Te ofrecemos el impulso que necesitas para iniciar este emocionante camino hacia el éxito.
      </p>
      </div>
      <div className='w-full flex flex-col h-full gap-[17px] items-center'>

      <div className='w-[90%] flex flex-row justify-center items-center gap-[14px] mt-4'>
        <ContactCard
        icono={'/assets/icons/email.svg'}
        titulo={'E-mail'}
        parrafo={"hello@relume.io"}
        />
        <ContactCard
        icono={'/assets/icons/whatsapp.svg'}
        titulo={'Teléfono'}
        parrafo={"+52 5523 5652"}
        />
        <ContactCard
        icono={'/assets/icons/ubicacion.svg'}
        titulo={'Ubicación'}
        parrafo={"123 Sample St,"}
        />

      </div>
      <div className='w-[90%] flex flex-row justify-center items-center gap-[14px]'>
      <ContactCard
        icono={'/assets/icons/email.svg'}
        titulo={'E-mail'}
        parrafo={"hello@relume.io"}
        />
        <ContactCard
        icono={'/assets/icons/whatsapp.svg'}
        titulo={'Teléfono'}
        parrafo={"+52 5523 5652"}
        />
      </div>
        </div>

    </div>
  )
}

export default Contacto