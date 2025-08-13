import React from "react";
import Navbar from "./component/navbar";
import HeroSection from "./component/heroSection";
import './home.css'

function Home(){
    return(
         <>
         <div class='homeContainer'>
             <Navbar/>
             <HeroSection/>
         </div>
       
    </>
    )
   

}

export default Home;