import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Jaizmora from "@/components/Jaizmora/Jaizmora";
import Hero from "@/components/Home/Hero/Hero";
import Acerca from "@/components/Home/Acerca/Acerca";
import Quienes from "@/components/Home/Quienes/Quienes";
import Servicio from "@/components/Home/Servicio/Servicio";
import Contacto from "@/components/Home/Contacto/Contacto";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
    <meta name="theme-color" content="#050409"/>
    <title>Larkin Baumann Security.</title>
    <meta name="description" content="Descubre Larkin Baumann Private Security, líder en protección ejecutiva y servicios de seguridad desde 1997. Ofrecemos transporte seguro, vehículos blindados, auditoría forense, respuesta a emergencias e investigaciones de antecedentes. Con un enfoque en la excelencia y la responsabilidad, somos tu elección confiable en seguridad privada." />
    <meta name="keywords" content="seguridad privada, seguridad, escoltas, blindaje, protección, emergencia, investigación, auditoria, ejecutivo" />
    <meta property="og:title" content="Larkin Baumann Security" />
    <meta property="og:description" content="Descubre Larkin Baumann Private Security, líder en protección ejecutiva y servicios de seguridad desde 1997. Ofrecemos transporte seguro, vehículos blindados, auditoría forense, respuesta a emergencias e investigaciones de antecedentes. Con un enfoque en la excelencia y la responsabilidad, somos tu elección confiable en seguridad privada." />
    <meta property="og:image" content="/assets/ogimage.jpg" />
    <meta property="og:url" content="https://www.lbsecurity.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="/assets/ogimage.jpg" />
    <link rel="icon" href="/assets/favicon.ico" />
  </Head>
        <main className="w-full h-full bg-[#000206] relative overflow-hidden max-w-[1440px] min-w-sm mx-auto">
      <Hero/>
      <Acerca/>
      <Quienes/>
      <Servicio/>
      <Contacto/>
    
    </main>
    </>
  );
}
