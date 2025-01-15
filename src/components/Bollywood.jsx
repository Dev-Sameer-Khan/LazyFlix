import React, { useEffect, useState } from 'react'
import star2 from '../assets/images/star 2.svg'
import { Link, useNavigate } from 'react-router-dom';

const Bollywood = () => {
   const [data, setData] = useState([]);

   
  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://lazycodwr.github.io/api/db.json");
        const result = await res.json();
        setData(result.movies);
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
     <section className='w-full h-1/2 my-10 text-[#818083] pl-10 max-[599px]:pl-4'>
            <div className="btm h-full w-full ">
            <div className='.txt flex items-center justify-start gap-2 mb-6'>
                <img className='w-7' src={star2} alt="" />
                <h4 className='font-[bold] text-white text-xl'>Bollywood</h4>
                <Link to="/bollywood"><div className='px-[6px] py-[2px] rounded-full text-white text-[0.85vw] max-[599px]:text-[3vw] bg-red-700'>View more</div></Link>
            </div>
            
            </div>
             
            <div className="movies-container flex items-start justify-start flex-wrap gap-3 max-[599px]:pt-2">
  {data
    .filter(movie => movie.category?.toLowerCase() === 'bollywood')
    .map((value, index) => (
    <div className="card w-[11vw] cursor-pointer max-[599px]:w-[29vw] h-[16vw] max-[599px]:h-[25vh] rounded overflow-hidden relative" key={index} onClick={(name)=>handlemovie(value.movieName)}>
        <img className='w-full h-full object-cover' src={value.bannerSmall} alt="" />
        <div className="overlay w-full h-1/2 absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="info w-full h-full absolute top-0 left-0 text-white p-2 flex items-start justify-between flex-col">
          <span className='font-[regular] text-[0.8vw] max-[599px]:text-[2.5vw] font-semibold rounded-full bg-[#CDD7DA] text-black px-2'>{value.releaseYear}</span>
          <p className='font-[bold] text-[0.9vw] max-[599px]:text-[3vw] textl'>{value.movieName}</p>
        </div>
      </div>
    ))}
</div>
          </section>
  )
}

export default Bollywood