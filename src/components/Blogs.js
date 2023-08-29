import React from 'react'
import "../styles/components/landing/blogs.css"

const Blogs = () => {
  return (
    <div className='blogs-section'>
      <div className='blogs-header'>
        <div className='content'>
          <p id='header'>BLOGS</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
        </div>
      </div>

      <div className='blogs-wrapper'>
        <div className='blogs-card'>
          <div className='blog-image'>
            <img src={require("../media/images/white-storey.jpg")} alt="" />
          </div>
          <div className='blog-details'>
            <p className='blog-header'>APARTMENT FOR SALE</p>
            <p>Ipsum eu dolore aliquip do quis labore sint qui consectetur fugiat ullamco labore ullamco. Adipisicing in nostrud mollit nulla deserunt adipisicing voluptate deserunt.</p>
          </div>
        </div>
        <div className='blogs-card'>
          <div className='blog-image'>
            <img src={require("../media/images/apartment.jpg")} alt="" />
          </div>
          <div className='blog-details'>
            <p className='blog-header'>LUXURY BUILDING FOR RENTAGE</p>
            <p>Ipsum eu dolore aliquip do quis labore sint qui consectetur fugiat ullamco labore ullamco. Adipisicing in nostrud mollit nulla deserunt adipisicing voluptate deserunt.</p>
          </div>
        </div>
        <div className='blogs-card'>
          <div className='blog-image'>
            <img src={require("../media/images/inh.jpg")} alt="" />
          </div>
          <div className='blog-details'>
            <p className='blog-header'>EXQUISITE APPARTMENT</p>
            <p>Ipsum eu dolore aliquip do quis labore sint qui consectetur fugiat ullamco labore ullamco. Adipisicing in nostrud mollit nulla deserunt adipisicing voluptate deserunt.</p>
          </div>
        </div>
        <div className='blogs-card'>
          <div className='blog-image'>
            <img src={require("../media/images/storey.jpg")} alt="" />
          </div>
          <div className='blog-details'>
            <p className='blog-header'>SKYSCRAPPER FOR BIDDING</p>
            <p>Ipsum eu dolore aliquip do quis labore sint qui consectetur fugiat ullamco labore ullamco. Adipisicing in nostrud mollit nulla deserunt adipisicing voluptate deserunt.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
