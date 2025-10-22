import React, { useState, useEffect } from "react";
import CardComponetUI from "./cardComponent";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./topAlbum.css";

const NewAlbum = ({ searchQuery }) => {
  const [newAlumData, setNewAlbumData] = useState([]);
  const [isShowAll, isSetShowAll] = useState(false);
    const [debouncedSearch, setDebouncedSearch] = useState("");

  const getNewAlbumData = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/new"
      );
      setNewAlbumData(response.data);
    } catch (error) {
      console.error("Error fetching album data:", error);
    }
  };

  const handleShowAll = () => {
    isSetShowAll((prev) => !prev);
    console.log("showAll", !isShowAll);
  };

  useEffect(() => {
    getNewAlbumData();
  }, []);

 useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 1000);

    return () => clearTimeout(handler);
  }, [searchQuery]);

const filterNewAlbumData = newAlumData.filter((album) =>
  (album?.title ?? "").toLowerCase().includes((debouncedSearch ?? "").toLowerCase())
);

  return (
  <>
    <div className="cardContainer">
      <div className="titleSection">
        <span className="albumCategory">New Albums</span>
        <span className="showAllBtn" onClick={handleShowAll}>
          {!isShowAll ? "Show All" : "Show Less"}
        </span>
      </div>

      {/* ✅ Show message when no data */}
      {filterNewAlbumData.length === 0 ? (
        <div className="noDataMsg">No Data Available</div>
      ) : !isShowAll ? (
        <>
          {/* ✅ Custom navigation buttons */}
          <div className="swiper-button-prev-custom"></div>
          <div className="swiper-button-next-custom"></div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={Math.min(filterNewAlbumData.length, 8)} 
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            onSwiper={(swiper) => {
              swiper.params.navigation.prevEl = ".swiper-button-prev-custom";
              swiper.params.navigation.nextEl = ".swiper-button-next-custom";
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {filterNewAlbumData.map((item, index) => (
              <SwiperSlide key={index}>
                <CardComponetUI
                  follows={item.follows}
                  image={item.image}
                  title={item.title}
                  type={"Follows"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        filterNewAlbumData.map((item, index) => (
          <CardComponetUI
            key={index}
            follows={item.follows}
            image={item.image}
            title={item.title}
            type={"Follows"}
          />
        ))
      )}
    </div>
  </>
);

};

export default NewAlbum;
