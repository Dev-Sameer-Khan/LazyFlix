import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import { FaSearch } from "react-icons/fa";
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const [movies, setMovies] = useState([]); // Stores all movies from API
  const [searchResults, setSearchResults] = useState([]); // Stores filtered results
  const [searchText, setSearchText] = useState(""); // Stores input value
  const [isSearchVisible, setIsSearchVisible] = useState(false); // Toggles search input visibility
  const [loading, setLoading] = useState(false); // Handles loading state

  const inputRef = useRef();
  

  const navigate = useNavigate();
  const handlemovie = (name)=>{
    window.localStorage.setItem('movieId', JSON.stringify(name));
    return navigate(`/movies/${name}`);
  }

  // Fetch movies from API
  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/movies');
      const data = await response.json();
      setMovies(data); // Store all movies
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  // Show/Hide Search Input
  const handleSearchToggle = () => {
    setIsSearchVisible(!isSearchVisible); // Toggle search visibility
    if (!isSearchVisible) {
      fetchMovies(); // Fetch movies only when search is shown
    }
    setSearchResults([]); // Clear results when toggling
    setSearchText(""); // Clear input when toggling
  };

  // Handle Search Input Change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchText(query);
    if (query) {
      const filteredResults = movies.filter((movie) =>
        movie.movieName.toLowerCase().includes(query)
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const show = document.querySelector('#show');
      if (show) {
        show.style.display = window.innerWidth > 599 ? 'none' : 'block';
      }
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showmenu = ()=>{
    
    let mobileMenu = document.querySelector('.mobile-menu');
    let show = document.querySelector('#show');
    let close = document.querySelector('#close');

      mobileMenu.style.display = 'block'
      show.style.display = 'none'
      close.style.display = 'block';
  }
  
  const closemenu = ()=>{
    let mobileMenu = document.querySelector('.mobile-menu');
    let close = document.querySelector('#close');
    close.style.display = 'none';
    mobileMenu.style.display = 'none';
    show.style.display = 'block';
  }

  return (
    <>
    <nav className='w-full z-[9999] h-24 bg-gradient-to-t from-transparent to-black/85 fixed top-0 left-0 flex items-center justify-between px-12 max-[599px]:px-4'>
      <div className="left max-[599px]:w-[72%] flex items-center justify-between max-[599px]:justify-end gap-10">
        <RiMenu2Line onClick={showmenu} id='show' className='absolute top-8.5 left-5 cursor-pointer hidden max-[599px]:block' color='white' size={30} />
        <div className="logo">
          <NavLink to="/"><img src={logo} className='h-[4.5vw] bg-cover' alt="Logo" /></NavLink>
        </div>
        <ul className='flex items-center justify-center gap-6 text-white font-[semibold] max-[599px]:hidden'>
          <NavLink to="/bollywood"><li className='text-[1.2vw]'>Bollywood</li></NavLink>
          <NavLink to="/hollywood"><li className='text-[1.2vw]'>Hollywood</li></NavLink>
          <NavLink to="/southindian"><li className='text-[1.2vw]'>South Indian</li></NavLink>
          <NavLink to="/punjabi"><li className='text-[1.2vw]'>Punjabi</li></NavLink>
        </ul>
      </div>
      <div className="right w-[26%] h-full flex items-center justify-end">
        {!isSearchVisible && (
          <FaSearch
            className='cursor-pointer'
            color='white'
            size={25}
            onClick={handleSearchToggle}
          />
        )}
        {isSearchVisible && (
          <IoClose
            className='cursor-pointer translate-x-2'
            color='red'
            size={35}
            onClick={handleSearchToggle}
          />
        )}
        {isSearchVisible && (
          <input
            type="text"
            placeholder='Search movies'
            className='w-[90%] max-[599px]:w-[80%] bg-[#181818] px-4 font-[regular] text-white placeholder:text-white h-12 outline-none border-[1px] border-[#464646] rounded absolute top-6 max-[599px]:left-6 left-12'
            value={searchText}
            onChange={handleSearchChange}
            ref={inputRef}
            autoFocus
          />
        )}
      </div>
      {searchResults.length > 0 && isSearchVisible && (
        <ul className='absolute top-20 left-12 max-[599px]:left-6 bg-[#282828] text-white w-[90%] max-[599px]:w-[80%] rounded shadow-md'>
          {searchResults.map((movie, index) => (
           <li key={index} className='px-4 py-2 hover:bg-[#464646] cursor-pointer' onClick={(name)=>handlemovie(movie.movieName)}>
              {movie.movieName} 
            </li>
          ))}
        </ul>
      )}
    </nav>

    <div className="mobile-menu fixed top-0 left-0 z-[9999] h-screen w-full hidden">
    <IoClose
          id='close'
            className='cursor-pointer absolute top-7 left-4 z-[999]'
            color='red'
            size={45}
            onClick={closemenu}
          />
        <ul className='flex w-full h-full items-center flex-col justify-center bg-[#181818] gap-6 text-white font-[semibold]'>
          <NavLink to="/bollywood"><li className='text-[10vw]'>Bollywood</li></NavLink>
          <NavLink to="/hollywood"><li className='text-[10vw]'>Hollywood</li></NavLink>
          <NavLink to="/southindian"><li className='text-[10vw]'>South Indian</li></NavLink>
          <NavLink to="/punjabi"><li className='text-[10vw]'>Punjabi</li></NavLink>
        </ul>
        </div>
        </>
  );
};

export default Navbar;
