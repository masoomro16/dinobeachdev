import React from 'react'
import dinoFoot from '../images/trex_footprint.svg';

function Footprint() {
  return (
    <div className='mt-20 mb-0 p-5 mx-5 md:mx-[6rem]'>
        {/* Top ROW */}
         <div className='max-h-4 flex mb-10 justify-between'>
            {/* Print 1 */}
            <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-[125deg] md:rotate-[50deg] object-contain h-16 md:relative md:top-32'
                />
            {/* Print 2 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-[65deg] md:rotate-[50deg] object-contain h-16 md:relative md:right-16 md:top-16'
                />
                {/* Print 3 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-[125deg] md:rotate-[70deg] object-contain h-16 md:relative md:right-20'
                />

                {/* Print 4 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-[65deg] object-contain h-16 md:relative md:bottom-14 md:right-20'
                />

                {/* Print 5 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-[100deg] object-contain h-16 relative right-16 hidden md:inline'
                />

                {/* Print 6 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-[100deg] object-contain h-16 relative right-24 bottom-6 hidden md:inline'
                />

                {/* Print 7 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-90 object-contain h-16 relative right-16 top-12 hidden md:inline'
                />
                {/* Print 8  */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-90 object-contain h-16 relative right-20 top-20 hidden md:inline'
                />

                {/* Print 9 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-90 object-contain h-16 relative right-20 top-32 hidden md:inline'
                />

                {/* Print 10 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-90 object-contain h-16 relative right-20 top-28 hidden md:inline'
                />
            </div>
    </div>
   
  )
}

export default Footprint