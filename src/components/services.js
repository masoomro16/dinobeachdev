import React from 'react'
import ServiceCard from './serviceCard';

function Services() {
  return (
    <div className='md:h-screen mx-5 md:mx-28 mt-5 relative z-10'>
        <div className='max-w-[70%] my-3'>
            <h3 className='context-text text-base md:text-xl'>services</h3>
            <h2 className='text-2xl md:text-5xl title-text blue-text'>we like to create <span className="gradient-text">pretty</span> websites that work <span className="gradient-text">fast</span></h2> 
            <p>Not quite sure? Take our quiz to find out your dino fit</p>
        </div>

        <div className="flex">
            <ServiceCard/>
            <ServiceCard/>
            {/* <ServiceCard/>
            <ServiceCard/> */}
        </div>

        {/* <div className='flex flex-wrap'>
            <div className='shrink flex-grow-1 basis-full md:basis-4/12 my-6 md:max-w-none md:min-w-0'>
                <h2 className='text-xl title-text gradient-text'>Day at DinoBeach</h2>
                <p className="text-sm content-text mt-3">Single Page Application/Landing Page</p>
                <p className="text-sm content-text mt-3 ">Social Media Packer</p>
                <p className="text-sm content-text mt-3">Contact Forms & Interactions</p>
                <p className="text-sm content-text mt-3">SEO Strategy</p>
                <p className="text-sm content-text mt-3">Perfect For: Restaurants</p>  
            </div>

            <div className='shrink flex-grow-1 basis-full md:basis-4/12 my-6 md:max-w-none md:min-w-0'>
                <h2 className='text-xl title-text gradient-text'>Weekend Getaway</h2>
                <p className="text-sm content-text mt-3">Multi-page Brochure Website</p>
                <p className="text-sm content-text mt-3">Perfect for: Podcast Site</p>  
            </div>

            <div className='shrink flex-grow-1 basis-full md:basis-4/12 my-6 md:max-w-none md:min-w-0'>
                <h2 className='text-xl title-text gradient-text'>Dinofluencer</h2>
                <p className="text-sm content-text mt-3">Blogging Platform for Fashion, Food, or anything you want!</p>  
            </div>

            <div className='shrink flex-grow-1 basis-full md:basis-4/12 mt-6 md:max-w-none md:min-w-0'>
                <h2 className='text-xl title-text gradient-text'>Dinoland</h2>
                <p className="text-sm content-text mt-3">eCommerce Store with Shopify</p>  
            </div>

            <div className='shrink flex-grow-1 basis-full md:basis-4/12 my-6 md:max-w-none md:min-w-0'>
                <h2 className='text-xl title-text gradient-text'>Build a Beach</h2>
                <p className="text-sm content-text mt-3">eCommerce Store with Shopfiy</p>  
            </div> 
            
        </div>*/}
    </div>
  )
}

export default Services;
