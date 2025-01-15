import React from 'react'
import Allmovie from '../components/Allmovie'
import { Helmet } from 'react-helmet-async'

const Admin = () => {
  return (
    <>
    <Helmet>
      <title>Admin Panel | LazyFlix</title>
      <meta name="description" content="Admin panel for managing movies in LazyFlix" />
    </Helmet>
    <Allmovie/>
    </>
  )
}

export default Admin