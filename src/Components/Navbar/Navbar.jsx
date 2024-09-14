import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Jobs</li>
            <li>About us</li>
            <li>Testimonials</li>
            <li><button className='btn'>Login/Sign up</button></li>
        </ul>
    </nav>
  )
}

export default Navbar