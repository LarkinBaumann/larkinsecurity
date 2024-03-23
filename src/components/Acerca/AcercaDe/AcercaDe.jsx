import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

function AcercaDe() {
  return (
    <div className="text-white w-full h-full flex flex-col items-center gap-[18px]">
      <h2 className="text-[25px] font-header font-black">Acerca De</h2>
      <p className="text-center font-paragraph font-black leading-[18px] text-[11px]">
      Desde nuestra fundación en 1997, <span className="text-[#55B0F0]"> LARKIN BAUMANN - Specialized Private Security Services</span>
      ha sido pionera en la prestación de servicios de seguridad privada de vanguardia. Iniciamos nuestra travesía con la firme convicción de establecer estándares impecables en la protección de personas y propiedades. A lo largo de los años, hemos ganado la confianza de clientes en México y en todo el mundo, gracias a nuestra dedicación a la excelencia y nuestro compromiso con la seguridad.
      </p>
      <Button
      text={"Servicios"}
      />
      <Image src="/assets/acerca/acercade/bmw.png" width={1000} height={1000} alt="Acerca De" className="w-full h-full flex flex-col " />
      <div className="">
        <h2 className="font-header text-[25px] font-black">Misión</h2>
        <p className="text-[11px] font-black leading-[19px] font-paragraph w-[225px]">
        En Larkin Baumann, buscamos satisfacer las necesidades de nuestros clientes, ofreciendo soluciones de seguridad personalizadas que se adaptan a sus requerimientos específicos con servicios de alta calidad, integridad y confidencialidad. 
        </p>
      </div>
      <div className="text-right">
        <h2 className="font-header text-[25px] font-black">Visión</h2>
        <p className="text-[11px] font-black leading-[19px] font-paragraph w-[225px]">
        Buscamos ser líderes de las compañías de servicios de seguridad privada, con la mayor rentabilidad sostenida donde los mejores aspiren a trabajar, además de ser reconocidos como el estándar de excelencia en la industria de servicios de seguridad privada.
        </p>
      </div>
      <div className="w-[220px] h-[220px]">
        <Image src="/assets/acerca/acercade/escoltas.png" width={1000} height={1000} alt="Acerca De" className="w-full h-full " />
      </div>
    </div>
  );
}

export default AcercaDe;
