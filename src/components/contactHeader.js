import React from 'react'
import dinoFoot from '../images/trex_footprint.svg';

const ContactHeader = () => {
    const dinoPrintStyles = 'h-16 hidden md:inline relative'
  return (
    <div className='max-w-[33%] mt-12'>
        <h2 className='title-text gradient-text font-extrabold text-7xl'>Interested in working with us? Let's Talk </h2>
        
        {/* dino Prints */}
        <img 
            src={dinoFoot}
            alt='dino footprint '
            className={`${dinoPrintStyles} left-32 rotate-[125deg]`}
        />
         <img 
            src={dinoFoot}
            alt='dino footprint '
            className={`${dinoPrintStyles} left-36 top-20 rotate-90`}
        />
         <img 
            src={dinoFoot}
            alt='dino footprint '
            className={`${dinoPrintStyles} left-48 top-12 rotate-[70deg]`}
        />
         <img 
            src={dinoFoot}
            alt='dino footprint '
            className={`${dinoPrintStyles} left-56 bottom-10 rotate-[50deg]`}
        />
    </div>
    
  )
}

export default ContactHeader