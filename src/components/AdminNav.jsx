import React, { useEffect } from 'react'
import logo from '../assets/images/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import { RiMenu2Line } from 'react-icons/ri'

const AdminNav = () => {

  useEffect(() => {
    const handleResize = () => {
      const show = document.querySelector('#showMenu');
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

  const showMenu = ()=>{
    
    let mobileMenu = document.querySelector('.mobile-menu');
    let show = document.querySelector('#showMenu');
    let close = document.querySelector('#closeMenu');

      mobileMenu.style.display = 'block'
      show.style.display = 'none'
      close.style.display = 'block';
  }
  
  const closeMenu = ()=>{
    let mobileMenu = document.querySelector('.mobile-menu');
    let close = document.querySelector('#closeMenu');
    let show = document.querySelector('#showMenu');
    close.style.display = 'none';
    mobileMenu.style.display = 'none';
    show.style.display = 'block';
  }

  return (
    <>
    <nav className='w-full fixed top-0 left-0 backdrop-blur-sm bg-[#333]/50 z-[999] px-12 max-[599px]:px-4 py-5 flex items-center justify-between'>
        <div className="left flex items-center gap-4">
          <div className="logo">
            <NavLink to="/admin"><img src={logo} className='h-[4.5vw] object-cover' alt="" /></NavLink>
          </div>
        </div>
        <div className="menu flex items-start justify-between gap-10 text-[1.2vw] font-[semibold] max-[599px]:hidden">
          <Link to="/admin/addmovie">Add Movies</Link>
          <Link to="/admin/editmovie">Edit Movies</Link>
          <Link to="/admin/deletemovie">Delete Movie</Link>
        </div>
        <div className="profile flex items-center leading-none justify-between flex-col max-[599px]:hidden">
          <h1 className='text-[1.5vw] font-[bold] max-[599px]:text-[4vw]'>Sameer Khan</h1>
          <h3 className='text-[1.2vw] font-[semibold] max-[599px]:text-[3.5vw]'>Admin</h3>
        </div>
          <RiMenu2Line onClick={showMenu} id='showMenu' className='cursor-pointer rotate-180 hidden max-[599px]:block' color='white' size={30} />
      </nav>

      <div className="mobile-menu fixed top-0 left-0 z-[9999] h-screen w-full hidden">
        <IoClose
          id='closeMenu'
          className='cursor-pointer absolute top-5 right-2 z-[999]'
          color='red'
          size={45}
          onClick={closeMenu}
        />
        <ul className='flex w-full h-full items-center flex-col justify-center bg-[#181818] gap-6 text-white font-[semibold]'>
          <Link to="/admin/addmovie"><li className='text-[8vw]'>Add Movies</li></Link>
          <Link to="/admin/editmovie"><li className='text-[8vw]'>Edit Movies</li></Link>
          <Link to="/admin/deletemovie"><li className='text-[8vw]'>Delete Movie</li></Link>
        <div className="profile flex items-center leading-none justify-between flex-col absolute top-8 left-6">
          <h1 className='text-[1.5vw] font-[bold] max-[599px]:text-[4.5vw]'>Sameer Khan</h1>
          <h3 className='text-[1.2vw] font-[semibold] max-[599px]:text-[4vw]'>Admin</h3>
        </div>
        </ul>
      </div>
      </>
  )
}

export default AdminNav