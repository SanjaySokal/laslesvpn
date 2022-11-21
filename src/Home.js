import React from 'react'
import About from './Components/About'
import Banner from './Components/Banner'
import BottomBanner from './Components/Bottom_Banner'
import Global from './Components/Global'
import Icons from './Components/Icons'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'

function Home() {
  return (
    <>
      <Banner />
      <BottomBanner />
      <About />
      <Pricing />
      <Global />
      <Icons />
      <Testimonials />
    </>
  )
}

export default Home
