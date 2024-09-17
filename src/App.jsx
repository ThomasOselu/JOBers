import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Jobs from './Components/Jobs/Jobs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="Careers" title="Our Services" />
        <Jobs/>
        <About/>
        <Campus/>
        <Testimonials/>
        <Title subTitle="Contact Us" title="Our Services" />
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App