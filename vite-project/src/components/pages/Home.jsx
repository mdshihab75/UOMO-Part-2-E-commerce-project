import React from 'react'
import Banner from '../home/Banner'
import HitsCollection from '../home/HitsCollection'
import BestSelling from '../home/BestSelling'
import Category from '../home/Category'
import NewSeason from '../home/NewSeason'
import LatestProducts from '../home/LatestProducts'

const Home = () => {
  return (
    <div>
        <Banner/>
        <HitsCollection/>
        <BestSelling/>
        <Category/>
        <NewSeason/>
        <LatestProducts/>
    </div>
  )
}

export default Home