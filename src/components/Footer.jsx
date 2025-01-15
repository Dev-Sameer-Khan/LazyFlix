import React from 'react'
import logo from '../assets/images/BollyFlix.svg'
import { Link ,NavLink } from 'react-router-dom'

const Footer = () => {
  return (
<>
        <div className="w-full h-[40vh] max-[599px]:h-fit max-[599px]:pt-4 flex items-center max-[599px]:items-start max-[599px]:px-6 justify-between max-[599px]:flex-col bg-[#101010] text-[#818083]">
        <div className="logo flex items-center max-[599px]:justify-start justify-center w-[25%] max-[599px]:w-full pr-6 h-full">
            <NavLink to="/"><img className='w-[15vw] max-[599px]:w-[65vw]' src={logo} alt="Logo" /></NavLink>
        </div>
            <div className='w-[25%] max-[599px]:w-full h-full flex items-start justify-center flex-col'>
                <h3 className="mt-6 font-[bold] text-[1.8vw] max-[599px]:text-[6vw]">Browse by</h3>
                <ul className="mt-2 text-[1.2vw] max-[599px]:text-[4vw] flex items-start gap-4 pl-2 justify-between flex-col text-[#737373] font-[semibold]">
                    <Link to="/bollywood"><li>Bollywood</li></Link>
                    <Link to="/hollywood"><li>Hollywood</li></Link>
                    <Link to="/southindian"><li>South Indian</li></Link>
                    <Link to="/punjabi"><li>Punjabi</li></Link>
                </ul>
            </div>
            <div className='w-[25%] max-[599px]:w-full h-full flex items-start justify-center flex-col'>
                <h3 className="mt-6 font-[bold] text-[1.8vw] max-[599px]:text-[6vw]">Help / Support</h3>
                <ul className="mt-2 text-[1.2vw] max-[599px]:text-[4vw] font-[semibold]  flex items-start gap-4 pl-2 justify-between flex-col text-[#737373">
                    <li>Contact</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>DMCA Notice</li>
                </ul>
            </div>
            <div className='w-[25%] max-[599px]:w-full h-full flex items-start justify-start pt-8 flex-col'> 
                <h3 className="mt-6 font-[bold] text-[1.8vw] max-[599px]:text-[5vw]">Select Your Language</h3>
                <select className="mt-2 bg-[#201F24] outline-none text-white rounded-md py-3 px-4 w-[90%] max-[599px]:w-full font-[regular]">
                    <option>Select Language</option>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Marathi</option>
                    <option>Gujrati</option>
                    <option>Bhojpuri</option>
                </select>
            </div>
        </div>
        <div className="text-center py-4 font-[regular] text-[#818083] bg-[#101010]">
            <p className='text-[1.1vw] max-[599px]:text-[3.5vw]'>Made With ❤️ By <Link to="https://www.linkedin.com/in/sameer-khan-6784b9320/" target='_blank' className='font-semibold'>LazyCodwr</Link> © 2024, All rights reserved.</p>
        </div>
    </>
  )
}

export default Footer