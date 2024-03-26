import Image from 'next/image'
import React, { useContext } from 'react'
import { AppContext } from '@/Context/AppContext'
import {motion} from 'framer-motion'
import ShadowAcercaSm2 from '../../Shadows/ShadowAcercaSm2'
import { useMediaQuery } from 'react-responsive';


function Hero() {

  const isMobile = useMediaQuery({ query: "(min-width: 640px)" });
const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
const isLarge = useMediaQuery({ query: "(min-width: 1023px)" });
const isExtraLarge = useMediaQuery({ query: "(min-width: 1280px)" });
const isDoubleExtraLarge = useMediaQuery({ query: "(min-width: 1536px)" });

  
  const {traduccion} = useContext(AppContext)

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 4 } },
  };

  
const variantsp = isLarge ? {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}
:
{
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 5, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.6,
      ease: "linear" // Add ease property for fluid animation
    } 
  },
};
const childVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      ease: "linear" // Add ease property for fluid animation
    } 
  },
};





  return (
   <div className='w-full h-screen relative  '>
    <div className='w-full h-full'>
      

        <Image src={"/assets/home/hero.png"}  fill={true}
          quality={100}
          priority alt='hero image' className='w-full h-full lg:hidden object-fill lg:object-cover lg:object-center md:object-bottom' />
        <Image src={"/assets/home/hero2.png"}  fill={true}
          quality={100}
          priority alt='hero image' className='hidden lg:block w-full h-full object-fill lg:object-cover lg:object-center md:object-bottom' />
   </div>
   <div className='w-full h-full flex flex-col justify-center items-center absolute top-0 gap-[35px] md:gap-[20px] lg:-translate-y-[80px] z-10'>
    <Image src="/assets/logoHero.png" width={200} height={200} alt='logo holding'/>
    <h2 className='text-[50px] md:text-[60px] lg:text-[66px] text-center font-header font-semibold leading-[51px] text-white'>
      Piense en sus Negocios,
    </h2>
    <h2 className='text-[50px] md:text-[60px] lg:text-[66px] text-center font-header font-semibold leading-[51px]  titulo2'>
      Nosotros en su seguridad
    </h2>

   </div>
    </div>
  )
}

export default Hero