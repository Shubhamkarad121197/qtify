import React, { useEffect, useState } from "react";
import CardComponetUI from "./cardComponent";

import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import prevIcon from '../assets/LeftArrow.svg';
import nextIcon from '../assets/RightArrow.svg';
import "./topAlbum.css"

const TopAlbum = () => {
  const [albumData, setAlbumData] = useState([]);
  const [isShowAll ,isSetShowAll]=useState(false)

  const getTopAlbumData = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setAlbumData(response.data);
    } catch (err) {
      console.error("Error fetching album data:", err);
    }
  };
 const handleShowAll = () => {
  isSetShowAll(prev => !prev);
  console.log("showAll", !isShowAll);
};
  useEffect(() => {
    getTopAlbumData();
  }, []);

  return (
    <div className="cardContainer">
      <div className="titleSection">
         <span className="albumCategory">Top Albums</span>
         <span className="showAllBtn" onClick={handleShowAll}>Show All</span>
      </div>
     {!isShowAll ? (
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={10}
    slidesPerView={8}
     navigation
  >
    {albumData.map((item, index) => (
      <SwiperSlide key={index}>
        <CardComponetUI
          follows={item.follows}
          image={item.image}
          title={item.title}
        />
      </SwiperSlide>
    ))}
  </Swiper>
) : (
  albumData.map((item, index) => (
    <CardComponetUI
      key={index}
      follows={item.follows}
      image={item.image}
      title={item.title}
    />
  ))
)}

      
    </div>
  );
};

export default TopAlbum;
