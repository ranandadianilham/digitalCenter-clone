import React from 'react'

const WelcomeSection = () => {
  return (
    <div className="welcome_section">
        <div className="intro_sub">
          <p className="intro_title roboto-black">Digital Center Indonesia</p>
          <p className="intro_sub roboto-medium">
            Improve your business by analyzing it deeply and using the latest
            technology to increase growth.
          </p>
          <div>
          <button className="knowMore_btn roboto-medium">Get To Know More</button>
          </div>
        </div>
        <div>
          <img src="public/hero-4-1.png" />
        </div>
      </div>
  )
}

export default WelcomeSection;