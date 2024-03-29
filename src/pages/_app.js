import { AppProvider } from "@/Context/AppContext";
import Footer from "@/components/Footer/Footer";
import Jaizmora from "@/components/Jaizmora/Jaizmora";
import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  return<>
  <AppProvider>
  <div className="w-full h-full relative    ">
    <Image src="/assets/fondoTotal2.png"
    layout='fill'
    quality={100}
    objectFit='cover'
    alt="Fondo Total"
    className="-z-50 hidden xl:block"
     
     />
  <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 max-w-[1440px] mx-auto min-w-sm m-auto z-20">
    <Navbar/>
    </div>
  <Component {...pageProps} />
  <div className="w-full h-full  max-w-[1440px] mx-auto min-w-sm m-auto z-20">
  </div>
  <Footer/>
  <Jaizmora/>
    
  </div>
  </AppProvider>
  </>
}
