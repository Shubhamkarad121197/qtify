import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardComponetUI from "./cardComponent";
import "./topAlbum.css";

const SongsSection = () => {
  const [value, setValue] = useState(0);
  const [songsData, setAllSongsData] = useState([]);
  const [rockSongData, setRockSongData] = useState([]);
   const [jazzSongData,setJazzSongData]=useState([]);
  const [popSongData,setpopSongData]=useState([]);
  const [bluesSongData,setBluesSongData]=useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getAllSongs = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/songs"
      );
      setAllSongsData(response.data);
      console.log('all',response.data)
    let filterRockData = response.data.filter((res) => res.genre.key === "rock");
    let filterPopData=response.data.filter((res)=>res.genre.key==='pop');
    let filterJazzData=response.data.filter((res)=>res.genre.key==='jazz');
    let filterBluesData=response.data.filter((res)=>res.genre.key==='blues');
    setRockSongData(filterRockData);
    setpopSongData(filterPopData);
    setJazzSongData(filterJazzData);
    setBluesSongData(filterBluesData);

    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    getAllSongs();
  }, []);
return (
  <>
    {/* Section Title */}
    <div className="titleSection">
      <span className="albumCategory">Songs</span>
    </div>

    <Box sx={{ width: "100%", mt: 2, fontFamily: "Poppins" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: { backgroundColor: "#34C94B" },
        }}
      >
        <Tab label="All" sx={{ color: "#fff", "&.Mui-selected": { color: "#fff" } }} />
        <Tab label="Rock" sx={{ color: "#fff", "&.Mui-selected": { color: "#fff" } }} />
        <Tab label="Pop" sx={{ color: "#fff", "&.Mui-selected": { color: "#fff" } }} />
        <Tab label="Jazz" sx={{ color: "#fff", "&.Mui-selected": { color: "#fff" } }} />
        <Tab label="Blues" sx={{ color: "#fff", "&.Mui-selected": { color: "#fff" } }} />
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ p: 2 }}>
        {value === 0 && (
          <>
            {songsData.length === 0 ? (
              <div className="noDataMsg">No Data Available</div>
            ) : (
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={Math.min(songsData.length, 8)}
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
                {songsData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <CardComponetUI
                      follows={item.likes}
                      image={item.image}
                      title={item.title}
                      type={"Likes"}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </>
        )}

        {value === 1 && (
          <>
            {rockSongData.length === 0 ? (
              <div className="noDataMsg">No Data Available</div>
            ) : (
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={Math.min(rockSongData.length, 8)}
                navigation
              >
                {rockSongData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <CardComponetUI
                      follows={item.likes}
                      image={item.image}
                      title={item.title}
                      type={"Likes"}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </>
        )}

        {value === 2 && (
          <>
            {popSongData.length === 0 ? (
              <div className="noDataMsg">No Data Available</div>
            ) : (
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={Math.min(popSongData.length, 8)}
                navigation
              >
                {popSongData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <CardComponetUI
                      follows={item.likes}
                      image={item.image}
                      title={item.title}
                      type={"Likes"}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </>
        )}

        {value === 3 && (
          <>
            {jazzSongData.length === 0 ? (
              <div className="noDataMsg">No Data Available</div>
            ) : (
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={Math.min(jazzSongData.length, 8)}
                navigation
              >
                {jazzSongData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <CardComponetUI
                      follows={item.likes}
                      image={item.image}
                      title={item.title}
                      type={"Likes"}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </>
        )}

        {value === 4 && (
          <>
            {bluesSongData.length === 0 ? (
              <div className="noDataMsg">No Data Available</div>
            ) : (
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={Math.min(bluesSongData.length, 8)}
                navigation
              >
                {bluesSongData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <CardComponetUI
                      follows={item.likes}
                      image={item.image}
                      title={item.title}
                      type={"Likes"}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </>
        )}
      </Box>
    </Box>
  </>
);

};

export default SongsSection;
