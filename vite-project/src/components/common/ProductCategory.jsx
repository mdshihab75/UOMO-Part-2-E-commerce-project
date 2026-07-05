import React from 'react'
import Image from './Image'

const ProductCategory = ({item}) => {
  return (
    <div className='max-w-[320px]'>
        <div>
            <Image className='w-full' src={item.thumbnail} alt="Productimages"/>
        </div>
        <div>
            <h3 className='font-jost font-medium text-base text-primary-black text-center uppercase mt-3'>{item.category}</h3>
            <p className='font-jost font-normal text-sm leading-6 text-fourth-color text-center'>{item.stock}</p>
        </div>
    </div>
  )
}

export default ProductCategory