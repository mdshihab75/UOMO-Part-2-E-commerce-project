import React from 'react'
import Banner from '../home/Banner'
import HitsCollection from '../home/HitsCollection'
import BestSelling from '../home/BestSelling'
import Category from '../home/Category'
import NewSeason from '../home/NewSeason'

const Home = () => {
  return (
    <div>
        <Banner/>
        <HitsCollection/>
        <BestSelling/>
        <Category/>
        <NewSeason/>
    </div>
  )
}

export default Home