import React from 'react'
import Header from './components/Header'
import HeroSection from './components/Hero'
import Products from './components/Products'
import Contact from './components/Contact'

const page = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Products/>
      <Contact/>
    </div>
  )
}

export default page