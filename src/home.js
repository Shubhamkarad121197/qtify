import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar";
import HeroSection from "./component/heroSection";
import axios from "axios";
import CardComponetUI from "./component/cardComponent";
import "./home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Home() {
  const [albumData, setAlbumData] = useState([]);

  const getTopAlbumData = async () => {
    let response = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/top"
    );
    console.log(response.data);
    setAlbumData(response.data);
  };

  useEffect(() => {
    getTopAlbumData();
  }, []);
  return (
    <>
      <div className="homeContainer">
        <Navbar />

        <HeroSection />
        <div className='cardContainer'>
            <span className='albumCategory'>Top Albums</span>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={8}
          navigation
         
        >
          {albumData.map((item, index) => (
            <SwiperSlide key={index}>
              <CardComponetUI follows={item.follows} image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        
      </div>
    </>
  );
}

export default Home;
