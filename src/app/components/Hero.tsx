import React from 'react'
import Image from 'next/image'
import cowImage from '../components/cow.jpg'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      {/* <img className="object-cover object-center rounded" alt="hero" src={cowImage}/> */}
      <Image src={cowImage} className="object-cover object-center rounded" width={550} height={550} alt='cow'></Image>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to farmer friendly dairy
        
      </h1>
      <p className="mb-8 leading-relaxed">The farmer-friendly dairy prioritizes the welfare of its farmers by ensuring fair prices for their produce and providing support for sustainable agricultural practices. Through transparent policies and cooperative initiatives, it fosters a mutually beneficial relationship, empowering farmers economically while promoting environmental stewardship. It serves as a model for ethical and inclusive dairy farming.</p>
      <div className="flex justify-center">
        
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero