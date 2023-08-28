import React from 'react'
import "../styles/pages/home.css"
import Navigation from '../components/Navigation'
import Landing from '../components/Landing'
import Agents from '../components/Agents'
import Footer from '../components/Footer'
import Properties from '../components/Properties'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className='home-overlay'>
        </div>
        <Navigation />
        <Landing />
        <Properties />
        <Agents />
        <Footer />
      </div>

    </div>
  )
}

export default Home
