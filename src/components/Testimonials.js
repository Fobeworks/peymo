import React from 'react'
import "../styles/components/landing/testimonials.css"
import images from "../utilities/constants"
import ImageSlider from './ImageSlider'


const Testimonials = () => {
  return (
    <div className='testimonials-section'>
    <div className='testimonials-header'>
        <div className='content'>
            <p id='header'>TESTIMONIALS</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
        </div>
    </div>

    <ImageSlider images={images} />
</div>
  )
}

export default Testimonials
