import React, { useEffect, useRef, useState } from 'react'
import star2 from '../assets/images/star 2.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';


 
const MostPopular = () => {


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
    <><section className='w-full h-1/2 my-10 max-[599px]:my-7 text-[#818083] px-10 max-[599px]:px-4'>
        <div className="top-txt w-full h-fit flex items-center justify-center flex-col py-6 ">
        <h3 className='font-[bold] text-[1.75vw] pb-4 max-[599px]:text-[6vw] max-[599px]:text-center max-[599px]:leading-none'>LAZYFLIX – Discover All The Latest Bollywood, Hollywood, South Indian & Punjabi Movies</h3>
        <p className='font-[regular] text-center leading-relaxed'>LazyFlix is here with its extensive collection of all the top-rated Bollywood blockbusters and Hollywood hits. Have the ultimate entertainment with Lazyflix South Indian and Punjabi films. From the action-packed thriller to heart-warming love stories to suspenseful dramas; there is a film for every taste. Explore the vast library to find your next favorite movie.</p>
        </div>
        <div className="btm h-full w-full ">
        <div className='.txt flex items-center justify-start gap-2 mb-6'>
            <img className='w-7' src={star2} alt="" />
            <h4 className='font-[bold] text-white text-xl'>Most popular</h4>
        </div>
        
        </div>
    
      <Swiper
        grabCursor={true}
        slidesPerView={slidesPerView} //responsive me 2.9 aise 9.8 rahega
        className="mySwiper"
      >
        
        {data.filter(movie => movie.showType === 'Most Popular').map((value,index)=>(
          <SwiperSlide key={index} className='w-full h-full relative cursor-pointer' onClick={(name)=>handlemovie(value.movieName)}>
        
          <div className="card w-[9vw] max-[599px]:w-[30vw] h-[13vw] max-[599px]:h-[25vh] rounded overflow-hidden relative">
              <img className='w-full h-full object-cover' src={value.bannerSmall} alt="" />
              <div className="overlay w-full h-1/2 absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-black"></div>
              <div className='w-12 h-12 rounded-full absolute top-1/2 scale-0 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm'></div>
              <div className="info w-full h-full absolute top-0 left-0 text-white p-2 flex items-start justify-between flex-col">
                  <span className='font-[regular] text-[0.75vw] rounded-full bg-[#C40C0C] px-2 max-[599px]:text-[2.5vw]'>MOVIE</span>
                  <p className='font-[bold] text-[0.9vw] max-[599px]:text-[3vw] max-[599px]:text-left'>{value.movieName}</p>
      
          </div>
      </div>
      </SwiperSlide>
        ))}

      </Swiper>
      </section>
    </>
  )
}

export default MostPopular