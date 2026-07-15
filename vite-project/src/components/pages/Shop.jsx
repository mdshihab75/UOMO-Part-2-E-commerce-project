import React from 'react'
import ShopBanner from '../shop/ShopBanner'
import BreadCrumb from '../common/BreadCrumb'
import SortAndView from '../shop/Sort&View'

const Shop = () => {
  return (
    <main className='pt-7.5'>
      <ShopBanner />
      <div className='flex'>
        <BreadCrumb />
        <SortAndView />
      </div>
    </main>
  )
}

export default Shop