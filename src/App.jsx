import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Jobs from './Components/Jobs/Jobs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Jobs' title='What we offer'/>
        <Jobs/>
        <About/>
        <Campus/>
      </div>

    </div>
  )
}

export default App