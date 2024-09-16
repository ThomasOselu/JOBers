import React from 'react'
import './About.css'
import  about_img from '../../assets/about.png'
import  play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className='about-right'>
            <h3>ABOUT JOBERS</h3>
            <h2>Guidance to the right career</h2>
            <p>At Jobers, we are dedicated to connecting talented tech professionals 
                with innovative companies seeking top-tier talent.
                Our platform is designed to streamline the hiring process for both job
                seekers and employers in the fast-paced world of technology. Whether you're a developer,
                engineer, data scientist, or IT specialist, Jobers provides a curated selection of
                tech roles tailored to your skills and experience.
            </p>
            <p>Our mission is to simplify the job search process in the tech industry 
                and help both employers and professionals find the perfect match to 
                foster innovation and growth
            </p>
        </div>
    </div>
  )
}

export default About