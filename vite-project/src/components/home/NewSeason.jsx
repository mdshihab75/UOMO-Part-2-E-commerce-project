import React from 'react'
import Image from '../common/Image'
import newseason from '../../assets/images/newseason.png'
const NewSeason = () => {
    return (
        <section className='mb-23'>
            <div className="relative w-full">
                <Image className="w-full object-cover" src={newseason} alt="newseason" />
                {/* Color Overlay */}
                <div className="absolute inset-0 bg-fifth-color/90"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 className="font-jost font-bold text-[60px] text-primary-white">NEW SEASON</h3>
                    <h4 className='font-jost font-normal text-base text-primary-white'>New Collection Release</h4>
                    <button className="mt-10 pl-18.75 pr-11.5 py-4.5 font-jost font-medium text-sm leading-6 text-primary-black bg-primary-white ">
                    <span className='after:content-[] after:w-4.5 after:h-0.5 after:absolute after:-left-7 after:top-2.5 after:bg-primary-black relative'>SHOP NOW</span> 
                    </button>
                </div>
            </div>
        </section>
    )
}

export default NewSeason