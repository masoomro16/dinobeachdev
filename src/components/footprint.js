import React from 'react'
import dinoFoot from '../images/trex_footprint.svg';

function Footprint() {
  return (
    <div className='mt-20 mb-0 p-5 mx-[6rem]'>
        {/* Top ROW */}
         <div className='max-h-4 flex mb-10 justify-between'>
            {/* Print 1 */}
            <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-[50deg] object-contain h-16 relative top-32'
                />
            {/* Print 2 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-[50deg] object-contain h-16 relative right-16 top-16'
                />
                {/* Print 3 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-[70deg] object-contain h-16 relative right-20'
                />

                {/* Print 4 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-90 object-contain h-16 relative bottom-14 right-20'
                />

                {/* Print 5 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-[100deg] object-contain h-16 relative right-16'
                />

                {/* Print 6 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-[100deg] object-contain h-16 relative right-24 bottom-6'
                />

                {/* Print 7 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-90 object-contain h-16 relative right-16 top-12'
                />
                {/* Print 8  */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-90 object-contain h-16 relative right-20 top-20'
                />

                {/* Print 9 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-90 object-contain h-16 relative right-20 top-32'
                />

                {/* Print 10 */}
                <img 
                    src={dinoFoot}
                    alt='dino footprint'
                    className='rotate-90 object-contain h-16 relative right-20 top-28'
                />
            </div>
    </div>
   
  )
}

export default Footprint