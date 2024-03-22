import React from 'react'

function Acerca() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <div>
            <span>Imagenes</span>
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center  text-white text-center gap-[15px]'>
            <h2 className='font-header text-[30px] font-black leading-[32px] w-[95%] '>
                Garantizamos tu tranquilidad con seguridad de <span className='titulo3'>primera calidad</span>
            </h2>
            <p>
            Nuestro equipo altamente capacitado y comprometido está dedicado a salvaguardar tu entorno, con una amplia gama de soluciones adaptadas a tus necesidades específicas, nos aseguramos de que puedas concentrarte en lo importante, mientras nosotros nos encargamos de tu seguridad.
            </p>
            <button className='w-[130px] h-[49px] px-[9px] py-[20px] text-center bg-[#022136] rounded-[7px] flex items-center justify-center border-[0.5px] border-[#1777BA] mb-[40px]'>
              Servicios
            </button>
        </div>
    </div>
  )
}

export default Acerca