import { Outlet } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWA from "../components/FloatingWA";

export default function(){
    return(
       <div className="bg-gray-950 text-white min-h-screen">
         <Navbar/>
         <main>
            <Outlet/>
            <FloatingWA/>
         </main>
         <Footer/>
        
        </div>
     


    )
}