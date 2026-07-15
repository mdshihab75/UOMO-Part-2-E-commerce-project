import React from 'react'
import Containar from '../ui/Container'
import { Link, useLocation } from 'react-router'

const BreadCrumb = () => {
  const { pathname } = useLocation()
  const location = pathname.split("/").pop()

  return (
    <Containar>
      <div className="flex items-center justify-between mb-10 gap-15">

        {/* Left Side */}
        <div>
          <div className="flex items-center ">
            <h3 className="font-jost font-medium text-[18px] text-primary-black">
              PRODUCT CATEGORIES
            </h3>
            <span className="text-primary-black cursor-pointer ml-23">⌃</span>
          </div>
        </div>

        {/* Right Side */}
        <h2 className="font-jost font-medium text-sm text-primary-black uppercase">
          <Link to="/">HOME</Link> / {location}
        </h2>

      </div>

      {/* Categories */}
      <div className="grid gap-x-15.5 gap-y-3 font-jost font-normal text-sm leading-6 text-primary-black">
        <p>Dresses</p>
        <p>Shorts</p>
        <p>Sweatshirts</p>
        <p>Swimwear</p>
        <p>Jackets</p>
        <p>T-Shirts & Tops</p>
        <p>Jeans</p>
        <p>Trousers</p>
        <p>Men</p>
        <p>Jumpers & Cardigans</p>
      </div>
    </Containar>
  )
}

export default BreadCrumb