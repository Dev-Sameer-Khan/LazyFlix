import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdRemoveRedEye } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import star from '../assets/images/star.svg'
import star2 from '../assets/images/star 2.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Movies = () => {

  const { movieId } = useParams();

  const [data, setData] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/movies");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();
  const handlemovie = (name)=>{
    window.localStorage.setItem('movieId', JSON.stringify(name));
    return navigate(`/movies/${name}`);
  }

  const [slidesPerView, setSlidesPerView] = useState(9.8);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 599) {
        setSlidesPerView(2.9);
      } else {
        setSlidesPerView(9.8);
      }
    };

    // Set initial value
    updateSlidesPerView();

    // Add event listener for resizing
    window.addEventListener("resize", updateSlidesPerView);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <section className="bg-[#181818] text-white">
      <Helmet>
        <title>{JSON.parse(window.localStorage.getItem('movieId'))} | LazyFlix</title>
        <meta name="description" content={data.filter(movie => movie.movieName === JSON.parse(window.localStorage.getItem('movieId')))[0]?.description || "Watch the latest movies on LazyFlix"} />
        <meta property="og:title" content={JSON.parse(window.localStorage.getItem('movieId'))} />
        <meta property="og:description" content={data.filter(movie => movie.movieName === JSON.parse(window.localStorage.getItem('movieId')))[0]?.description || "Watch the latest movies on LazyFlix"} />

      </Helmet>
      <Navbar />
      {data.filter(movie => movie.movieName === JSON.parse(window.localStorage.getItem('movieId'))).map((movie, index) => (
<div key={index}>
      <div className="h-[85vh] max-[599px]:h-[50vh] w-full relative mb-12">
        <div className="absolute w-full h-44 top-0 left-0 bg-gradient-to-t from-transparent to-[#181818]/50"></div>
        <div className="absolute w-full h-screen bottom-0 left-0 bg-gradient-to-b from-transparent to-[#181818]"></div>
        <img className="w-full h-full object-top object-cover" src={movie.bannerBig} alt="" />
      </div>
      <div className="w-[80%] max-[599px]:w-full h-full flex items-start justify-center flex-col p-12 max-[599px]:p-8 max-[599px]:pt-14 text-[#818083] font-[bold]">
         <h1 className="text-4xl max-[599px]:text-[7.5vw] text-white">{movie.movieName}</h1>
         <div className="flex items-center justify-between gap-2 text-[1vw] max-[599px]:text-[3vw] py-3">
           <span className="flex items-center justify-center">
             <img className="w-5" src={star} alt="" />
             {movie.rating}
           </span>
           <span>{movie.releaseYear}</span>
           <span>{movie.length}</span>
           <MdRemoveRedEye />
           <span>{movie.views}</span>
         </div>
         <p className="text-left text-[1.4vw] max-[599px]:text-[4vw] font-[regular] w-[95%] max-[599px]:w-full">
           {movie.description || "No description available."}
         </p>
         <p className="font-[regular] text-white text-[1.35vw] max-[599px]:text-[4vw] mt-4"><span className="text-[#818083]">Director:</span> {movie.directorName}</p>
         <p className="font-[regular] text-white text-[1.35vw] max-[599px]:text-[4vw]"><span className="text-[#818083]">Genre:</span> {movie.genre}</p>
         <p className="font-[regular] text-white text-[1.35vw] max-[599px]:text-[4vw]"><span className="text-[#818083]">Cast:</span> {movie.cast}</p>
         <Link to={movie.watchLink} target="_blank"><button className="flex items-center justify-center gap-2 bg-[#DE1212] text-white py-2 px-4 rounded-md mt-4 text-[1.2vw] max-[599px]:text-[4vw]">
           <FaRegCirclePlay />
           WATCH NOW
         </button></Link>
       </div>
      </div>))}
       
       <div className='.txt flex items-center justify-start pl-11 max-[599px]:pl-6 gap-2 mb-6'>
                   <img className='w-7' src={star2} alt="" />
                   <h4 className='font-[bold] text-white text-xl'>More titles like this</h4>
               </div>
       <Swiper
        grabCursor={true}
        slidesPerView={slidesPerView}
        className="mySwiper"
      >

        {data.filter(movie => movie.showType === 'Most Popular').map((value,index)=>(

          <SwiperSlide key={index} onClick={name => handlemovie(value.movieName)} className='w-full h-full relative px-12 max-[599px]:px-6 py-6'>
        
          <div className="card w-[9vw] cursor-pointer max-[599px]:w-[29vw] h-[13vw] max-[599px]:h-[25vh] rounded overflow-hidden relative">
              <img className='w-full h-full bg-cover' src={value.bannerSmall} alt="" />
              <div className="overlay w-full h-1/2 absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-black"></div>
              <div className="info w-full h-full absolute top-0 left-0 text-white p-2 flex items-start justify-between flex-col">
                  <span className='font-[regular] text-[0.75vw] rounded-full bg-[#C40C0C] px-2 max-[500px]:text-[2.3vw]'>MOVIE</span>
                  <p className='font-[bold] text-[0.9vw] max-[599px]:text-[3vw] max-[599px]:text-left'>{value.movieName}</p>
      
          </div>
      </div>
      </SwiperSlide>
        ))}

      </Swiper>
      <Footer />
    </section>
  );
};

export default Movies;
