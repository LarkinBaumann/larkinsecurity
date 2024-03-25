import React from "react";
import Button from "../../Button";
import Image from "next/image";
import ShadowQuienes from "./Shadows/ShadowQuienes";
import ShadowTop from "./Shadows/ShadowTop";
import ShadowTopLg from "./Shadows/ShadowTopLg";
import ShadowQuienesLg from "./Shadows/ShadowQuienesLg";


function Quienes() {
  
  return (
    <div className="w-full h-[540px] flex flex-col lg:flex-row-reverse justify-center items-center text-center lg:text-right text-white gap-[10px] px-4 relative">
      <ShadowTop/>
      <ShadowTopLg/>
      <div className="w-full h-full flex flex-col justify-between absolute ">
        <div className="w-full h-[40%] md:h-[50%] z-0">
          <Image
            src="/assets/home/quienes/escoltas.png"
            width={1000}
            height={1000}
            alt="Escoltas"
            className="-z-10 w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[40%] md:h-[50%] z-0">
          <Image
            src="/assets/home/quienes/helicoptero.png"
            alt="Helicoptero"
            width={2000}
            height={2000}
            className="-z-10  w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full h-full absolute flex flex-col justify-center items-center">
        <div className="z-0">
      <ShadowQuienes/>
      <ShadowQuienesLg/>
        </div>
      </div>
      

      <div className="w-full h-full z-10 flex flex-col lg:items-end px-4 md:px-8 ">
      <h2 className="lg:w-[377px] font-header text-[40px] lg:text-[89px] font-extrabold lg:leading-[92px] z-10">
        ¿Quiénes <span className="titulo4">somos?</span>
      </h2>
      <p className="lg:w-[400px] text-[13px] md:text-[20px] lg:text-[18px] leading-[22px] md:leading-[34px] lg:leading-[30px]  z-10">
        Somos más que un proveedor de seguridad, somos tu socio en la protección
        de lo que más valoras. Confía en nosotros para garantizar tu
        tranquilidad y seguridad en todo momento.
      </p>
      
      <div className="z-0 lg:hidden">
      <Button text={"Nosotros"} />
      </div>
      </div>
      <div className='hidden w-full h-full lg:flex flex-row justify-center px-4 '>
        <div className='h-[250px] lg:h-[350px] flex flex-col justify-end relative '>
          <Image src="/assets/home/servicio/escudo1.png" alt="Escudo" width={1000} height={1000} className='w-[123px] h-[126px]' />
          <div className='flex flex-col text-center w-full absolute top-[60%] lg:top-[75%] text-[12px] font-paragraph leading-[15px]'>
          <p className='font-extrabold'>Visión global</p>
          <p className='font-light'>e innovación</p>
          </div>
        </div>
        <div className='h-full flex flex-col justify-start relative z-10'>
          <Image src="/assets/home/servicio/escudo1.png" alt="Escudo" width={1000} height={1000}
          className='w-[182px] h-[197px] lg:w-[258px] lg:h-[266px] '
          />
          <div className='flex flex-col text-center w-full absolute top-[35%] lg:top-[13%] text-[14px] font-paragraph leading-[15px]'>
          <p className='font-extrabold'>Compromiso con</p>
          <p className='font-light'>la excelecia</p>
          </div>
        </div>
        <div className='h-[250px] flex flex-col justify-end relative '>
          <Image src="/assets/home/servicio/escudo1.png" alt="Escudo" width={1000} height={1000} className='w-[123px] h-[126px]' />
          <div className='flex flex-col text-center w-full absolute top-[65%] text-[12px] font-paragraph leading-[15px]'>
          <p className='font-extrabold'>Integridad y</p>
          <p className='font-light'>Confianza</p>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Quienes;
