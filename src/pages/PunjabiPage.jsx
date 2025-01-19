import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import star2 from '../assets/images/star 2.svg'
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
const PunjabiPage = () => {
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
    

return (
  <div className="bg-[#181818] w-full min-h-screen">
    <Helmet>
      <title>Punjabi Movies | LazyFlix</title>
      <meta name="description" content="Discover the latest Punjabi movies, trailers, and more." />
      <meta property="og:title" content="LazyFlix - Punjabi Movies" />
      <meta property="og:description" content="Discover the latest Punjabi movies, trailers, and more." />
      <meta property="og:image" content="https://lazycodwr.github.io/lazyflix/logo.png" />
      <meta property="og:url" content="https://lazyflix.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="LazyFlix - Punjabi Movies" />
    </Helmet>
  <Navbar />
  <section className='w-full h-1/2 py-28 text-[#818083] pl-10 max-[599px]:pl-4'>
              <div className="btm h-full w-full ">
              <div className='.txt flex items-center justify-start gap-2 mb-6'>
                  <img className='w-7' src={star2} alt="" />
                  <h4 className='font-[bold] text-white text-xl'>Punjabi</h4>
              </div>
              
              </div>
               
              <div className="movies-container flex items-start justify-start flex-wrap gap-3">
    {data
      .filter(movie => movie.category?.toLowerCase() === 'punjabi')
      .map((value, index) => (
        <div className="card w-[11vw] cursor-pointer max-[599px]:w-[29vw] h-[16vw] max-[599px]:h-[25vh] rounded overflow-hidden relative" key={index} onClick={(name)=>handlemovie(value.movieName)}>
          <img className='w-full h-full bg-cover' src={value.bannerSmall} alt="" />
          <div className="overlay w-full h-1/2 absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-black"></div>
          <div className="info w-full h-full absolute top-0 left-0 text-white p-2 flex items-start justify-between flex-col">
            <span className='font-[regular] text-[0.8vw] max-[599px]:text-[2.5vw] font-semibold rounded-full bg-[#CDD7DA] text-black px-2'>{value.releaseYear}</span>
            <p className='font-[bold] text-[0.9vw] max-[599px]:text-[3vw]'>{value.movieName}</p>
          </div>
        </div>
      ))}
  </div>
            </section>
            <Footer/>
  </div>
)
}

export default PunjabiPage