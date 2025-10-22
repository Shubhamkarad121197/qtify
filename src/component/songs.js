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
            style: { backgroundColor: "#34C94B" }, // Custom active line color
          }}
        >
          <Tab
            label="All"
            sx={{ color: "#fff", "&.Mui-selected": { color: "#fff" } }}
          />
          <Tab
            label="Rock"
            sx={{ color: "#fff", "&.Mui-selected": { color: "#fff" } }}
          />
          <Tab
            label="Pop"
            sx={{ color: "#fff", "&.Mui-selected": { color: "#fff" } }}
          />
          <Tab
            label="Jazz"
            sx={{ color: "#fff", "&.Mui-selected": { color: "#fff" } }}
          />
          <Tab
            label="Blues"
            sx={{ color: "#fff", "&.Mui-selected": { color: "#fff" } }}
          />
        </Tabs>

        {/* Tab Content */}
        <Box sx={{ p: 2 }}>
          {value === 0 && (
            <Typography sx={{ color: "#fff" }}>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={8}
                navigation
              >
                {songsData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <CardComponetUI
                      follows={item.likes}
                      image={item.image}
                      title={item.title}
                       type={'Likes'}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Typography>
          )}
          {value === 1 && (
            <Typography sx={{ color: "#fff" }}>
                <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={8}
                navigation
              >
                {rockSongData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <CardComponetUI
                      follows={item.likes}
                      image={item.image}
                      title={item.title}
                       type={'Likes'}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Typography>
          )}
          {value === 2 && (
            <Typography sx={{ color: "#fff" }}>
                <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={8}
                navigation
              >
                {popSongData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <CardComponetUI
                      follows={item.likes}
                      image={item.image}
                      title={item.title}
                       type={'Likes'}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Typography>
          )}
          {value === 3 && (
            <Typography sx={{ color: "#fff" }}>
                <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={8}
                navigation
              >
                {jazzSongData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <CardComponetUI
                      follows={item.likes}
                      image={item.image}
                      title={item.title}
                       type={'Likes'}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Typography>
          )}
          {value === 4 && (
            <Typography sx={{ color: "#fff" }}>
                <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={8}
                navigation
              >
                {bluesSongData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <CardComponetUI
                      follows={item.likes}
                      image={item.image}
                      title={item.title}
                      type={'Likes'}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

export default SongsSection;
