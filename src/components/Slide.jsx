import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { MdRemoveRedEye } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import star from '../assets/images/star.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link, useNavigate } from "react-router-dom";

const Slide = () => {
  const [data, setData] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // The API URL was incorrect - removing /movies from the end
        const res = await fetch("http://localhost:3000/movies");
        const result = await res.json();
        // Access the movies array from the response
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();
  const handlemovie = (name)=>{
    window.localStorage.setItem('movieId', JSON.stringify(name));
    return navigate(`/movies/${name}`);
  }
  

  return (

    <Swiper
      slidesPerView={1}
      grabCursor={true}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}" style="background-color: #DE1212;"></span>`;
        },
      }}
      loop={true}
      modules={[Autoplay , Pagination]}
      autoplay={{delay : 5000}}
      className="mySwiper"
    >

      {data && data.slice(0 ,5).map((movie, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-[85vh] max-[599px]:h-[80vh] relative flex items-center justify-between">
            {/* Top Gradient */}
            <div className="absolute w-full h-44 top-0 left-0 bg-gradient-to-t from-transparent to-[#181818]/50"></div>
            {/* Bottom Gradient */}
            <div className="absolute w-full h-screen bottom-0 left-0 bg-gradient-to-b from-transparent to-[#181818]"></div>
            {/* Movie Banner */}
            <img
              className="w-full h-full object-cover object-top"
              src={movie.bannerBig}
              alt={movie.movieName}
            />
            {/* Movie Details */}
          <div className="w-1/2 max-[599px]:w-full h-full absolute flex items-start justify-center flex-col px-12 max-[599px]:px-4 text-[#fff] font-[bold] pt-8 max-[599px]:pt-12">
              <h1 className="text-3xl max-[599px]:text-[8vw]">{movie.movieName}</h1>
              <div className="flex items-center justify-between gap-2 text-[0.85vw] max-[599px]:text-[3.5vw] py-3">
                <span className="flex items-center justify-center">
                  <img className="w-5" src={star} alt="" />
                  {movie.rating}
                </span>
                <span>{movie.releaseYear}</span>
                <span className="border-[0.5px] px-[10px] py-[1.5px] flex items-center justify-center rounded-full text-[0.75vw] max-[599px]:text-[2vw]">
                  {movie.type.toUpperCase()}
                </span>
                <span>{movie.length}</span>
                <MdRemoveRedEye />
                <span>{movie.views}</span>
              </div>
              <p className="text-left text-[1.25vw] max-[599px]:text-[4vw] font-[regular] w-[95%]">
                {movie.description || "No description available."}
              </p>
              <p className="font-[regular] text-[1.2vw] max-[599px]:text-[4vw] mt-4">Director: {movie.directorName}</p>
              <p className="font-[regular] text-[1.2vw] max-[599px]:text-[4vw]">Genre: {movie.genre}</p>
              <p className="font-[regular] text-[1.2vw] max-[599px]:text-[4vw] text-left">Cast: {movie.cast}</p>
              <button onClick={(name)=>handlemovie(movie.movieName)} className="flex items-center justify-center gap-2 bg-[#DE1212] py-2 px-4 rounded-md mt-4 text-[1.2vw] max-[599px]:text-[4vw]">
                <FaRegCirclePlay />
                WATCH NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}

    </Swiper>

  );
};

export default Slide;
