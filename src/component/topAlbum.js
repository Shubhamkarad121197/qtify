import React, { useEffect, useState } from "react";
import CardComponetUI from "./cardComponent";

import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./topAlbum.css"

const TopAlbum = ({searchQuery}) => {
  const [albumData, setAlbumData] = useState([]);
  const [isShowAll ,isSetShowAll]=useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");


  const getTopAlbumData = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top"
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

   useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 1000);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Filter albums based on search query
  const filteredAlbums = albumData.filter((album) =>
    album.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="cardContainer">
      <div className="titleSection">
         <span className="albumCategory">Top Albums</span>
         <span className="showAllBtn" onClick={handleShowAll}>
          {!isShowAll?'Show All':'Show Less'}
         </span>
      </div>
     {!isShowAll ? (
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={10}
    slidesPerView={8}
     navigation
  >
    {filteredAlbums.map((item, index) => (
      <SwiperSlide key={index}>
        <CardComponetUI
          follows={item.follows}
          image={item.image}
          title={item.title}
          type={'Follows'}
        />
      </SwiperSlide>
    ))}
  </Swiper>
) : (
  filteredAlbums.map((item, index) => (
    <CardComponetUI
      
      follows={item.follows}
      image={item.image}
      title={item.title}
       type={'Follows'}
    />
  ))
)}

      
    </div>
  );
};

export default TopAlbum;
