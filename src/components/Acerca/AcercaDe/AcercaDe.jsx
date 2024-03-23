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
      <Image src="/assets/acerca/acercade/bmw.png" width={1000} height={1000} alt="Acerca De" className="w-full h-full" />
    </div>
  );
}

export default AcercaDe;
