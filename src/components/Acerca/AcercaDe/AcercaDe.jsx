import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import ShadowTop from "./Shadows/ShadowTop";

function AcercaDe() {
  return (
    <div className="text-white w-full h-full flex flex-col relative">
      <ShadowTop/>

{/* Primera parte */}
<div className="w-full h-full flex flex-col lg:flex-row-reverse xl:items-center ">
      <div className=" w-full h-full flex flex-col items-center lg:items-start  gap-[18px] px-4 md:px-8 z-20">
      <h2 className="text-[25px] md:text-[60px] font-header font-black">Acerca De</h2>
      <p className="text-center lg:text-left font-paragraph font-extrabold leading-[18px] md:leading-[34px]   text-[11px] md:text-[20px]">
      Desde nuestra fundación en 1997, <span className="text-[#55B0F0]"> LARKIN BAUMANN - Specialized Private Security Services</span>
      ha sido pionera en la prestación de servicios de seguridad privada de vanguardia. Iniciamos nuestra travesía con la firme convicción de establecer estándares impecables en la protección de personas y propiedades. A lo largo de los años, hemos ganado la confianza de clientes en México y en todo el mundo, gracias a nuestra dedicación a la excelencia y nuestro compromiso con la seguridad.
      </p>
      <Button
      text={"Servicios"}
      />
      </div>
      <div className="w-full h-full flex flex-row justify-center  items-center relative">
        <Image src="/assets/acerca/acercade/bmwfondo.svg" width={1000} height={1000} alt="Acerca De" className="absolute "
/>
      <Image src="/assets/acerca/acercade/bmw2.png" width={1000} height={1000} alt="Acerca De" className="w-[202px] h-[239px] md:h-[400px] md:w-[500px] lg:h-[604px] lg:w-[539px] xl:w-full xl:h-[752px] 2xl:w-[760px] 2xl:h-[852px] md:object-contain flex flex-col rotate-[-7deg] lg:rotate-0  " />
      </div>
      </div>
{/* Segunda parte */}
<div className="w-full h-full flex flex-col items-center lg:flex-row mt-4 lg:mt-8">
  <div className=" h-full flex flex-col lg:gap-[40px] lg:pl-10 mb-4 lg:mb-0">
      <div className=" md:w-[530px] z-20">
        <h2 className="w-full font-header text-[25px] md:text-[40px] font-extrabold">Misión</h2>
        <p className=" text-[11px] md:text-[20px] font-black leading-[19px] md:leading-[34px] font-paragraph w-[225px] md:w-full">
        En Larkin Baumann, buscamos satisfacer las necesidades de nuestros clientes, ofreciendo soluciones de seguridad personalizadas que se adaptan a sus requerimientos específicos con servicios de alta calidad, integridad y confidencialidad. 
        </p>
      </div>
      <div className="md:w-[530px] text-right lg:text-left ">
        <h2 className="font-header text-[25px] font-extabold md:text-[40px] ">Visión</h2>
        <p className="text-[11px] md:text-[20px] font-black leading-[19px] md:leading-[34px] font-paragraph w-[225px] md:w-full">
        Buscamos ser líderes de las compañías de servicios de seguridad privada, con la mayor rentabilidad sostenida donde los mejores aspiren a trabajar, además de ser reconocidos como el estándar de excelencia en la industria de servicios de seguridad privada.
        </p>
      </div>
      </div>
      <div className="lg:w-full flex flex-row justify-center">
      <div className="w-[220px] lg:w-[400px] xl:w-[500px] h-[220px] lg:h-[400px] xl:h-[500px] z-20">
        <Image src="/assets/acerca/acercade/escoltas2.png" width={1000} height={1000} alt="Acerca De" className="w-full h-full " />
      </div>
      </div>
    </div>
    </div>
  );
}

export default AcercaDe;
