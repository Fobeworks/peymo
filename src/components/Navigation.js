import React from 'react'
import "../styles/components/navigation/navigation.css"

const Navigation = () => {
  return (
    <div className='navigation-section'>
      <div className='logo-section'>
      <img src={require("../media/images/logo.png")} alt=""  width={"100px"} />
      
      </div>

      <div className='navigations'>
      <ul className='horizontal'>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </div>
    </div>
  )
}

export default Navigation
