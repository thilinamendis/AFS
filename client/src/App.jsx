import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'


const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero />
      <About />
      <Footer />
    </main>
  )
}

export default App