import React from 'react'
import HeroSection from '../components/hero'
import Newcollection from '../components/newcollection'
import PolicySection from '../components/PolicySection'
import Newsletter from '../components/NewsLetter'
import GoToSellingPageButton from '../components/sellHeroHome'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Newcollection/>
        <GoToSellingPageButton/>
        <PolicySection/>
        <Newsletter/>
    </div>
  )
}

export default Home