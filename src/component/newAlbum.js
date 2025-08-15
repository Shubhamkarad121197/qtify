import React, { useState,useEffect } from "react";
import CardComponetUI from "./cardComponent";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./topAlbum.css"


const NewAlbum=()=>
{

    const [newAlumData,setNewAlbumData]=useState([]);
     const [isShowAll ,isSetShowAll]=useState(false)


    const getNewAlbumData=async()=>{
        try{
        const response=await axios.get('https://qtify-backend-labs.crio.do/albums/new');
        setNewAlbumData(response.data)
        }catch(error){
              console.error("Error fetching album data:", error);
        }
       
    }

     const handleShowAll = () => {
  isSetShowAll(prev => !prev);
  console.log("showAll", !isShowAll);
};

    useEffect(()=>{
        getNewAlbumData();
    },[])
    return(
        <>
         <div className="cardContainer">
      <div className="titleSection">
         <span className="albumCategory">New Albums</span>
         <span className="showAllBtn" onClick={handleShowAll}>Show All</span>
      </div>
     {!isShowAll ? (
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={10}
    slidesPerView={8}
     navigation={{
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  }}
  >
    {newAlumData.map((item, index) => (
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
  newAlumData.map((item, index) => (
    <CardComponetUI
      key={index}
      follows={item.follows}
      image={item.image}
      title={item.title}
    />
  ))
)}

      
    </div>
        </>
    )
}

export default NewAlbum