import React from 'react'
import Navbar from './components/Navbar'

import Footer from './components/Footer'

import Landing from './pages/Landing'
import { Helmet } from 'react-helmet-async'

const App = () => {
  return (
    <main className='bg-[#181818]'>
      <Helmet>
        <title>LazyFlix.com | Watch Hollywood, Bollywood, South Indian, and Punjabi Movies</title>
        <meta name='description' content='LazyFlix is your all-in-one movie streaming platform! Dive into a vast collection of Hollywood blockbusters, Bollywood classics, South Indian thrillers, and Punjabi hits. Whether you’re in the mood for action-packed adventures, heartfelt romances, or laugh-out-loud comedies, LazyFlix has something for everyone. Explore trending movies, create your watchlist, and enjoy a seamless viewing experience from the comfort of your couch. LazyFlix—where movie magic comes alive!' />
      </Helmet>
      <Navbar/>
      <Landing/>
      <Footer/>
    </main>
  )
}

export default App