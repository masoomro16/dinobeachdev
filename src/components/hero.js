import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function Hero() {
  return (
    <div className='flex flex-wrap md:flex-nowrap justify-center items-center'>
        <div className='flex-col'>
            <h1 className='block min-h-[300] title-text text-8xl font-extrabold  gradient-text pt-2'> creating fun digital experiences</h1>
            <p>we're a web development team specializing in fast, unique websites</p>
            <button className='rounded-full bg-[#FFDE9D] text-lg p-5'>Let us prove it</button>
        </div>
        <div>

        <StaticImage
                alt="beach"
                src="../images/vintage-beach2.jpg"
                className='scale-[.80] rounded-t-[45%]'  
        />
        </div>
    </div>
  )
}

 
/*
old scale property
scale-[.5]
*/
export default Hero;