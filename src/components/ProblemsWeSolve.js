import React from 'react'
import "../styles/components/landing/problems-we-solve.css"

const ProblemsWeSolve = () => {
    return (
        <div className='prob-container'>
            <div className='left-section'>
                <img src={require("../media/images/probs.jpg")} alt="Logo" />
            </div>

            <div className='right-section'>
                <div>
                    <p className="prob-title">PROBLEMS WE SOLVE</p>
                </div>
                <div>
                    <p >Many newcomers and Gen-Z individuals face barriers
                        when it comes to entering the real estate market,
                        such as limited capital, lack of knowledge, and
                        complex investment processes. Traditional real estate
                        ownership is often unattainable due to high costs
                        and entry requirements. This restricts them from
                        benefiting from the lucrative opportunities that real
                        estate offers, such as round-the-clock rental income
                        and long-term financial growth.
                    </p>
                </div>
                <div>
                    <button className='button'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default ProblemsWeSolve
