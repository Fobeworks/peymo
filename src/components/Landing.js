import React from 'react'
import "../styles/components/landing/landing.css"

const Landing = () => {
    return (
        <div className='landing-container'>
            <div className='left-section'>
                <div >
                    <p id="mainp">Unlocking Real Estate for Gen Z's and New comers</p>
                    <p id="detail">The platform that provides an avenue for  individuals to unlock the potential of real  estate investment, generating consistent rental 
                    income and fostering financial independence.</p>
                </div>
                <div className='action-section'>
                    <button className='button'>Get Started</button>
                </div>
            </div>

            <div className='right-section'>
                <div className='info-card'>
                    <div className='info-header'>
                        <p>WE GIVE ACCESS TO REAL ESTATE OPPORTUNITIES</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
