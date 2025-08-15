import React ,{useState} from "react";
import Navbar from "./component/navbar";
import HeroSection from "./component/heroSection";
import "./home.css";
import TopAlbum from "./component/topAlbum"
import NewAlbum from "./component/newAlbum";
import SongsSection from "./component/songs";


function Home() {
   const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <div className="homeContainer">
        <Navbar onSearch={setSearchQuery}/>
        <HeroSection />
        <div className='section1'>
            <TopAlbum searchQuery={searchQuery}/>
        </div>
         <div className='section2'>
            <NewAlbum searchQuery={searchQuery}/>
        </div>
        <div className='songSection3'>
            <SongsSection searchQuery={searchQuery}/>
        </div>
       
        
      </div>
    </>
  );
}

export default Home;
