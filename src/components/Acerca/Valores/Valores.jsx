import React from 'react'
import ValoresCard from './ValoresCard'
import Shadow from './Shadows/Shadow'

function Valores() {
  return (
    <div
    className='w-full h-[250px] md:h-[400px] lg:h-[800px] flex flex-col items-center justify-center text-white px-4 lg:px-10 mt-8 relative z-10 '
    >
      <Shadow/>
    <div className='flex flex-col justify-center items-center'>
    <h2 className='text-[25px] md:text-[40px] lg:text-[60px] font-header font-extrabold'>
        Valores
    </h2>
    <p className='text-[9px] md:text-[20px]  font-paragraph font-semiblack leading-[15px]  md:leading-[34px] lg:leading-[30px]  text-center lg:px-[150px]'>
    Basados en los siguientes valores nos comprometemos a seguir siendo un referente en seguridad y protección para aquellos que confían en nosotros.
    </p>
  
    </div>
    
    <div className='w-full flex flex-row justify-center items-center gap-[11px] mt-8'>
        <ValoresCard
        icono={'/assets/icons/innovacion.png'}
        titulo={'Visión Global e'}
        parrafo={'Innovacion'}
        texto = {"Nos impulsamos hacia nuevas ideas y enfoques para abordar los desafíos de seguridad en un mundo cambiante. Estamos comprometidos con la innovación y la adopción de tecnologías emergentes para adaptarnos rápidamente a las necesidades globales de seguridad."}
        />
        <ValoresCard
        icono={'/assets/icons/compromiso.png'}
        titulo={'Compromiso con'}
        parrafo={'Excelencia'}
        texto={"Buscamos la excelencia en cada aspecto de nuestro trabajo, desde la selección y formación de nuestro equipo hasta la implementación de tecnología, con el objetivo de superar expectativas y establecer estándares de calidad excepcionales en todos nuestros servicios."}
        />
        <ValoresCard
        icono={'/assets/icons/integridad.png'}
        titulo={'Integridad y'}
        parrafo={'Confianza'}
        texto={
          "Nos comprometemos a actuar con honestidad, transparencia y ética en todas nuestras interacciones. Nuestros clientes confían en nosotros para proteger lo que más valoran. En cada servicio nuestro objetivo es mantener esa confianza con integridad y excelencia constante."
        }
        />
    </div>
    </div>
  )
}

export default Valores