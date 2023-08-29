import React from 'react'
import "../styles/components/landing/agents.css"


const Agents = () => {
    return (
        <div className='agent-section'>
            <div className='agent-header'>
                <div className='content'>
                    <p id='header'>OUR TOP AGENTS</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
                </div>
            </div>
            <div className='agent-cards-container'>
                <div className='agent-card'>
                    <div className='agent-image-container'>
                        <div className='agent-image'>
                            <img src={require("../media/images/team-1.jpg")} alt="" />
                        </div>
                    </div>
                    <div className='agent-details'>
                        <p className='name'>James Doe</p>
                        <p className="agent-title">Real Estate Agent</p>
                        <p className='agent-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
                    </div>
                    <div className='agent-handles'>

                    </div>
                </div>
                <div className='agent-card'>
                    <div className='agent-image-container'>
                        <div className='agent-image'>
                            <img src={require("../media/images/team-2.jpg")} alt="" />
                        </div>
                    </div>
                    <div className='agent-details'>
                        <p className='name'>James Doe</p>
                        <p className="agent-title">Real Estate Agent</p>
                        <p className='agent-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
                    </div>
                    <div className='agent-handles'>

                    </div>
                </div>
                <div className='agent-card'>
                    <div className='agent-image-container'>
                        <div className='agent-image'>
                            <img src={require("../media/images/testimonial-1.jpg")} alt="" />
                        </div>
                    </div>
                    <div className='agent-details'>
                        <p className='name'>James Doe</p>
                        <p className="agent-title">Real Estate Agent</p>
                        <p className='agent-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
                    </div>
                    <div className='agent-handles'>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Agents
