import React from 'react'
import ServiceCard from './serviceCard';

const serviceData = [
    {
        packageName: "Day at Dino Beach",
        title: "Single landing page",
        description: "Everything your customers need to know on a single page, straight to the point", 
        useCase:"Perfect for: product ads, restaurants "
    },
    {
        packageName: "Weekend Getaway",
        title: "Multi-page Brochure Site",
        description: "Some text describing it goes here", 
        useCase:"Perfect for: small businesses"
    },
    {
        packageName: "Dinofluencer",
        title: "Blogging Platform",
        description: "Some text describing it goes here", 
        useCase:"Perfect for: fashion, food, lifestyle blogs, podcast site"
    },
    {
        packageName: "Dinoland",
        title: "E-Commerce Site",
        description: "Some text describing it goes here", 
        useCase:"Perfect for: small and large online stores"
    }
]

function Services() {

    return (
        <div className='md:min-h-screen mx-auto md:mx-28 mt-5 relative z-10'>
            <div className='max-w-[70%] md:my-3 mx-auto md:mx-0'>
                <h3 className='context-text text-base md:text-xl'>services</h3>
                <h2 className='text-2xl md:text-5xl title-text blue-text'>we like to create <span className="gradient-text">pretty</span> websites that work <span className="gradient-text">fast</span></h2> 
                <p>Not quite sure what you need? Take our quiz to find your perfect fit</p>
            </div>

            <div className="flex flex-wrap flex-col justify-center md:flex-row md:my-20 my-10"> 
                <ServiceCard {...serviceData[0]}/>
                <ServiceCard {...serviceData[1]}/>
                <div className="flex flex-col justify-center w-1/2 md:w-1/5 order-last md:order-none mx-auto md:mx-0">
                    <h3 className="title-text text-center text-xl md:text-3xl text-blue">Need something more custom? Tell us more</h3>
                </div>
                <ServiceCard {...serviceData[2]}/>
                <ServiceCard {...serviceData[3]}/>
            </div>

        </div>
    )
}

export default Services;

/* <div className='flex flex-wrap'>
    
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
    
</div>*/