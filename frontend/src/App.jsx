import React from 'react'
import Navbar from'./components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Features from './components/Features/Features.jsx';
import Testimonial from './components/Testimonial/Testimonial.jsx';
import Integrate from './components/Integrate/Integrate.jsx';
import Footer from './components/Footer/Footer.jsx';
const App = () => {
  return (
    <div className=''>
     <Navbar/>
     <Hero/>
     <Features/>
     <Testimonial/>
     <Integrate/>
     <Footer/>
    </div>
  )
}

export default App