import React from 'react'
import "../styles/components/landing/properties.css"

const Properties = () => {
  // const handleHover = (event) => {
  //   const thev = event.target.style;
  //   console.log(thev)
  //   alert("Hovered")
  // }
  return (
    <div className='properties'>
      <div className='properties-head'>
        <p id='property-title'>OUR PROPERTIES</p>
      </div>

      <div className='property-wrapper'>
        <div className='property-card'>
          <div className='overlay'></div>
          <div className='text-overlay' >
            <p id='plan'>PREMIUM</p>
            <p id='range'>Minimum:<b> $9,740,000</b></p>
          </div>

          <div className='below'>
            <div className='property-image'>
              <img src={require("../media/images/storey.jpg")} alt="" />
            </div>
            <div className='property-details'>
              <p id="title">HOUOSTON DIVISION</p>
              <p id="price">Home Apartment</p>
              <p id="location">London</p>
            </div></div>
        </div>
        <div className='property-card'>
          <div className='property-image'>
            <img src={require("../media/images/inh.jpg")} alt="" />
          </div>
          <div className='property-details'>
            <p id="title">HOUOSTON DIVISION</p>
            <p id="price">Lease</p>
            <p id="location">London</p>
          </div>
        </div>
        <div className='property-card'>
          <div className='property-image'>
            <img src={require("../media/images/inhom.jpg")} alt="" />
          </div>
          <div className='property-details'>
            <p id="title">HOUOSTON DIVISION</p>
            <p id="price">Rentage</p>
            <p id="location">London</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Properties
