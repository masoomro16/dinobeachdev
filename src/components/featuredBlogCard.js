import React, {useState} from 'react'

import {FaArrowRight} from 'react-icons/fa';

function FeaturedBlogCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='gradient-background rounded-xl h-80 w-80 md:w-[47%] flex justify-center content-center self-center my-6'>
      <div className='h-[97.5%] w-[97.5%] card rounded-xl justify-self-center self-center' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        <div className='h-full w-full flex flex-col justify-between'>
          <h1 className={`text-xl md:${isHovered ? "text-6xl" : "text-5xl"} mx-8 my-4 title-text`}>
              5 CSS Grid Tricks to Learn Today
          </h1>
          <p className={`${isHovered ? "hidden" : "inline"} self-center mb-36 content-text mx-8 semi-bold`}>
            Some description goes here. Learn how to make a fun react app tralalala
          </p>
          <FaArrowRight className={`self-end arrow mx-4 my-4 ${isHovered ? "inline" : "hidden"}`} size={80}/>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogCard;

// For h1 - font size should be 6xl on hover and 5xl non-hover
