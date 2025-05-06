import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'


const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero />
      <Footer />
    </main>
  )
}

export default App