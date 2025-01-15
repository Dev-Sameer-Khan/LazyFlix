import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4">
      <Helmet>
        <title>Error Page | LazyFlix</title>
        <meta name="description" content="An error page for LazyFlix" />
      </Helmet>
        <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-center">Oops! That page can't be found.</h1>
        <p className="text-lg md:text-xl lg:text-2xl py-4 text-center max-w-2xl">It looks like nothing was found at this location. Maybe try one of the links below or a search?</p>
        <div className="mt-8">
            <h2 className="text-lg md:text-xl font-semibold text-center">Most Used Categories</h2>
            <ul className="mt-4 text-center">
                <li className="py-2">Bollywood</li>
                <li className="py-2">South Indian</li>
                <li className="py-2">Hollywood</li>
                <li className="py-2">Punjabi</li>
            </ul>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/">
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md">
                HOME 
              </button>
            </Link> 
            <button className="w-full sm:w-auto bg-gradient-to-r from-red-400 to-red-500 text-white font-semibold px-6 py-3 rounded-md">
                Contact Us
            </button>
        </div>
    </div>
  )
}

export default Errorpage