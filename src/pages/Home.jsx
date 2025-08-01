import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/Latestcollection'
import Beastseller from '../components/Beastseller'
import Ourpolicy from '../components/Ourpolicy'
import NewslatterBox from '../components/NewslatterBox'

const Home = () => {
  return (
    <div>
        <Hero />
        <LatestCollection />
        <Beastseller/>
        <Ourpolicy/>
        <NewslatterBox/>
    </div>
  )
}

export default Home
