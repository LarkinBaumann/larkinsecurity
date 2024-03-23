import Image from 'next/image'
import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { AppContext } from '@/Context/AppContext';

function Carrousel() {

    const { traduccion } = useContext(AppContext);

    const [ref, inView] = useInView({
        triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
      });
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
            duration: 1.5,
          },
        },
      };
    
      const variantsP = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 5,
            ease: "easeInOut",
          },
        },
      };
    
      const childVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 2.5,
            ease: "easeInOut",
          },
        },
      };
    

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="w-full h-full lg:hidden flex flex-row items-center overflow-x-scroll no-scrollbar gap-[7px] "
  >
            {traduccion.empresas.map((empresa, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="w-[184px] md:w-[350px] h-[350px] md:h-[550px] flex flex-col justify-between items-center bg-[#183F5C2E] rounded-[22px]
                border-[1px] border-[#1777BA]
                "
              >
                <div className="w-[184px] md:w-[350px] h-[136px] md:h-[250px]">
                <Image
          src={empresa.imagen}
          width={100}
          height={100}
          alt={empresa.nombre}
          className="w-full h-full object-cover rounded-t-[22px]"
         
        />
                </div>
                <div
                  className="w-[101px] md:w-[150px] h-[38px] px[6px] py-[15px] flex flex-row justify-center items-center
                    rounded-[5px]
                    "
                  style={{ background: "rgba(11, 32, 46, 0.30)" }}
                >
                  <p
                    className="text-[12px] leading-[15px]
                      text-center"
                  >
                    {empresa.nombre}
                  </p>
                </div>
                <p className="text-center font-paragraph  leading-[15px] md:leading-[24px] text-[12px] md:text-[17px] w-full px-[13px] h-[64px]">
                  {empresa.descripcion}
                </p>
                <div>
                  <button
                    className="text-white w-[82px] md:w-[150px] h-[20px] md:h-[38px]  bg-[#005E93]  cursor-pointer 
                mb-4
                "
                  >
                    <div className=" w-full h-full flex justify-center items-center gap-[6px] text-[9px] md:text-[15px] font-paragraph cursor-pointer ">
                      {traduccion.empresaBoton}{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="9"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M15.7392 1.60058C15.7392 1.063 15.3035 0.627207 14.7659 0.627206L6.00553 0.627207C5.46795 0.627207 5.03216 1.063 5.03216 1.60058C5.03216 2.13816 5.46795 2.57395 6.00553 2.57395L13.7925 2.57395L13.7925 10.3609C13.7925 10.8985 14.2283 11.3343 14.7659 11.3343C15.3035 11.3343 15.7392 10.8985 15.7392 10.3609L15.7392 1.60058ZM1.82695 15.9161L15.4542 2.28886L14.0776 0.912301L0.450394 14.5395L1.82695 15.9161Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
  )
}

export default Carrousel