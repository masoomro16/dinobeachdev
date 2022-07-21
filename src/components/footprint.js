import React from 'react'
import dinoFoot from '../images/trex_footprint.svg';

function Footprint() {
  return (
    <div class='mt-20 mb-0 p-5'>
        {/* Top ROW */}
         <div className='max-h-4 flex justify-between mb-10'>
            <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-45 object-contain h-16'
                />
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-[65deg] object-contain h-16'
                />
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-[135deg] object-contain h-16'
                />
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-90 object-contain h-16'
                />
            </div>

            {/* Bottom Row */}
            <div className='max-h-4 flex justify-between mt-10'>
            <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-45 object-contain h-16'
                />
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-[65deg] object-contain h-16'
                />
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-[135deg] object-contain h-16'
                />
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-90 object-contain h-16'
                />
            </div>
    </div>
   
  )
}

export default Footprint