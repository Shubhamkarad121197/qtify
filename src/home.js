import React from "react";
import Navbar from "./component/navbar";
import HeroSection from "./component/heroSection";
import "./home.css";
import TopAlbum from "./component/topAlbum"
import NewAlbum from "./component/newAlbum";
import SongsSection from "./component/songs";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <Navbar/>
        <HeroSection />
        <div className='section1'>
            <TopAlbum/>
        </div>
         <div className='section2'>
            <NewAlbum/>
        </div>
        <div className='songSection3'>
            <SongsSection/>
        </div>
       
        
      </div>
    </>
  );
}

export default Home;
