import React from 'react'
import ProductCategories from './ProductCategories'
import ColorFilter from './ColorFilter'
import SizeFilter from './SizeFilter'
import BrandFilter from './BrandFilter'
import PriceFilter from './PriceFilter'

const ShopSidebar = () => {
  return (
    <aside className="w-75 shrink-0">
      <ProductCategories />
      <ColorFilter />
      <SizeFilter />
      <BrandFilter />
      <PriceFilter />
    </aside>
  )
}

export default ShopSidebar