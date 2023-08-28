import React from 'react'
import "../styles/components/landing/agents.css"


const Agents = () => {
    return (
        <div className='agent-section'>
            <div className='agent-header'>
                <div className='content'>
                    <p id='header'>OUR AGENTS</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
                </div>
            </div>
            <div className='agent-cards-container'>
                <div className='agent-card'>
                    <div className='agent-image-container'>
                        <div className='agent-image'>
                            <img src={require("../media/images/team-2.jpg")} alt="" />
                        </div>
                    </div>
                    <div className='agent-details'>
                        <p id='name'>James Doe</p>
                        <p id="agent-title">Real Estate Agent</p>
                        <p id='agent-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
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
                        <p id='name'>James Doe</p>
                        <p id="agent-title">Real Estate Agent</p>
                        <p id='agent-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
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
                        <p id='name'>James Doe</p>
                        <p id="agent-title">Real Estate Agent</p>
                        <p id='agent-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
                    </div>
                    <div className='agent-handles'>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Agents
