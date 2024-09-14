import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Opportunity for a better life and career</h1>
        <p>Our cutting-edge algorithm is designed to match qualified customers with the appropriate career
          opportunity for their growth and development. Our consumers receive valueable insights on the
          area of focus on various industries.</p>
          <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero