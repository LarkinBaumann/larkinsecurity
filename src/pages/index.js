import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Jaizmora from "@/components/Jaizmora/Jaizmora";
import Hero from "@/components/Hero/Hero";
import Acerca from "@/components/Acerca/Acerca";
import Quienes from "@/components/Quienes/Quienes";
import Servicio from "@/components/Servicio/Servicio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
    <meta name="theme-color" content="#050409"/>
    <title>Larkin Baumann Holding.</title>
    <meta name="description" content="Descubre Larkin Baumann Holding, empresa líder en diversas industrias a nivel global desde 1997. Nuestra holding se especializa en la creación y gestión de empresas en sectores que van desde la seguridad privada hasta la construcción de viviendas. Con un enfoque en la excelencia y la responsabilidad, somos la elección confiable para tus necesidades empresariales." />
    <meta name="keywords" content="seguridad privada, seguridad, finanzas, metales preciosos, oro, metales, hierro, viviendas, mineria, real estate,  petroleo, gas, inversion, inversiones, industrial, industria, proteccion, gestion financiera, diesel, propiedades, escoltas" />
    <meta property="og:title" content="Larkin Baumann Holding" />
    <meta property="og:description" content="Descubre Larkin Baumann Holding, empresa líder en diversas industrias a nivel global desde 1997. Nuestra holding se especializa en la creación y gestión de empresas en sectores que van desde la seguridad privada hasta la construcción de viviendas. Con un enfoque en la excelencia y la responsabilidad, somos la elección confiable para tus necesidades empresariales." />
    <meta property="og:image" content="/assets/ogimage.jpg" />
    <meta property="og:url" content="https://www.lbholding.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="/assets/ogimage.jpg" />
    <link rel="icon" href="/assets/favicon.ico" />
  </Head>
        <main className="w-full h-full bg-[#000206] relative">
      <Hero/>
      <Acerca/>
      <Quienes/>
      <Servicio/>
      <Footer/>
      <Jaizmora/>
    
    </main>
    </>
  );
}
