import { AppProvider } from "@/Context/AppContext";
import Footer from "@/components/Footer/Footer";
import Jaizmora from "@/components/Jaizmora/Jaizmora";
import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return<>
  <AppProvider>
  <div className="w-full h-full relative  ">
    <div className="w-full h-full absolute top-8 z-20">
    <Navbar/>
    </div>
  <Component {...pageProps} />
  <Footer/>
  <Jaizmora/>
  </div>
  </AppProvider>
  </>
}
