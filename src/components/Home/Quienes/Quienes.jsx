import React from "react";
import Button from "../../Button";
import Image from "next/image";
import ShadowQuienes from "./Shadows/ShadowQuienes";
import ShadowTop from "./Shadows/ShadowTop";
import ShadowTopLg from "./Shadows/ShadowTopLg";
import ShadowQuienesLg from "./Shadows/ShadowQuienesLg";


function Quienes() {
  
  return (
    <div className="w-full h-[540px] flex flex-col justify-center items-center text-center text-white gap-[10px] px-4 relative">
      <ShadowTop/>
      <ShadowTopLg/>
      <div className="w-full h-full flex flex-col justify-between absolute ">
        <div className="w-full h-[40%] z-0">
          <Image
            src="/assets/home/quienes/escoltas.png"
            width={1000}
            height={1000}
            alt="Escoltas"
            className="-z-10 w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[40%] z-0">
          <Image
            src="/assets/home/quienes/helicoptero.png"
            alt="Helicoptero"
            width={1000}
            height={1000}
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
      <h2 className="font-header text-[40px] font-extrabold z-10">
        ¿Quiénes <span className="titulo4">somos?</span>
      </h2>
      <p className="text-[13px] leading-[22px]  z-10">
        Somos más que un proveedor de seguridad, somos tu socio en la protección
        de lo que más valoras. Confía en nosotros para garantizar tu
        tranquilidad y seguridad en todo momento.
      </p>
      <div className="z-0">
      <Button text={"Nosotros"} />
      </div>
    </div>
  );
}

export default Quienes;
