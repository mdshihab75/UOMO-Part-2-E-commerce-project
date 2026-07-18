import React from 'react'
import ShopBanner from '../shop/ShopBanner'
import Container from '../ui/Container'
import BreadCrumb from '../common/BreadCrumb'
import SortAndView from '../shop/Sort&View'
import ShopSidebar from '../shop/ShopSidebar'
import ProductCategoriesTitle from '../shop/ProductCategoriesTitle'
import ProductGrid from '../shop/ProductGrid'

const Shop = () => {
  return (
    <main>
      <ShopBanner />

      <Container>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-15">
            <ProductCategoriesTitle />
            <BreadCrumb />
          </div>
          <SortAndView />
        </div>

        {/* Main Content */}
        <div className="flex gap-15">
          <ShopSidebar />
          <ProductGrid />
        </div>
      </Container>
    </main>
  )
}

export default Shop