import { AppProvider } from "@/Context/AppContext";
import Footer from "@/components/Footer/Footer";
import Jaizmora from "@/components/Jaizmora/Jaizmora";
import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return<>
  <AppProvider>
  <div className="w-full h-full relative    ">
  <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 max-w-[1440px] mx-auto min-w-sm m-auto z-20">
    <Navbar/>
    </div>
  <Component {...pageProps} />
  <Footer/>
  <Jaizmora/>
  </div>
  </AppProvider>
  </>
}
