import React from 'react'
import { Hero } from '../components/Hero'
import { Products } from '../components/Products'
import { Banner } from '../components/Banner'
import { News } from '../components/News'
import { Footer } from '../components/Footer'
import '../style.css'
import TrendingItems from '../components/TrendingItems'

export const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <Products/>
      <Banner/>
      <TrendingItems/>
      <News/>
      <Footer/>
    </div>
  )
}
