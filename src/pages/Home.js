import React from 'react'
import "../styles/pages/home.css"
import Navigation from '../components/Navigation'
import Landing from '../components/Landing'
import Agents from '../components/Agents'
import Footer from '../components/Footer'
import Properties from '../components/Properties'
import Testimonials from '../components/Testimonials'
import ProblemsWeSolve from '../components/ProblemsWeSolve'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div style={{overflow: "hidden"}}>
          <div className='home-overlay'>
          </div>
        </div>
        <Navigation />
        <Landing />
        <Properties />
        <ProblemsWeSolve />
        <Agents />
        <Testimonials />
        <Blogs />
        <Footer />
      </div>

    </div>
  )
}

export default Home
