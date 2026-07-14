import React from 'react'
import Containar from '../ui/Container'
import { Link, useLocation } from 'react-router'
const BreadCrumb = () => {
    const {pathname} = useLocation()
    let location = pathname.split("/").pop()
    
  return (
    <Containar>
        <h2 className='font-jost font-medium text-sm text-primary-black leading-6 uppercase mb-10'>
            <Link to="/">HOME</Link> / {location}</h2>
    </Containar>
    
  )
}

export default BreadCrumb