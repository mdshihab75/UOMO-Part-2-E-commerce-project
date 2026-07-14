import React from 'react'
import ShopBannerImage from '../../assets/images/shopbanner.png'
import Image from '../common/Image'
import { ShopBannerData } from '../../api/ShopBannerData'
import Listitems from '../common/Listitems'
const ShopBanner = () => {
  return (
    <section>
      <div className='relative mb-9'>
        <Image className='w-full mx-auto px-15' src={ShopBannerImage} alt='ShopBannerImage' />
        <ul className="absolute bottom-37.5 left-1/2 -translate-x-1/2 flex gap-7.5 z-10">
          {
            ShopBannerData?.map((item) => (
              <Listitems className='list-items' key={item.id}>{item.name}</Listitems>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default ShopBanner