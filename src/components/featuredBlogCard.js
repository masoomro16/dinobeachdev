import React from 'react'

import {FaArrowRight} from 'react-icons/fa';

function FeaturedBlogCard() {
  return (
    <div className='gradient-background rounded-xl h-80 md:w-[47%] flex justify-center content-center'>
      <div className='h-[97.5%] w-[97.5%] card rounded-xl justify-self-center self-center'>
        <div className='h-full w-full flex flex-col justify-between'>
          <h1 className='text-6xl mx-4 my-4'>
              5 CSS Grid Tricks to Learn Today
          </h1>
          <FaArrowRight className='self-end arrow mx-4 my-4' size={80}/>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogCard;