import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { StaticImage } from 'gatsby-plugin-image'


const ServiceImgCol = ({selectedService, serviceData}) => {
  // Styles
  const imageStyles = 'h-4/5 scale-[.90] rounded-t-[45%] w-96'
  const stampStyles = 'absolute bottom-[20%] left-[80%] z-10 rotating'
  const pricingLine1Styles = 'content-text text-xl text-left mb-5'
  const pricingContainerStyles = 'title-text text-4xl text-center flex'
  const priceLineStyles = 'text-pink'
  const arrowStyles = 'arrow2 rounded-full h-20 w-20 p-2 absolute left-[80%] bottom-[5%] hover:h-24 hover:w-24'


  const price = selectedService.price;

  const selectedServiceDetails = serviceData.find(({title})=> title === selectedService);
  console.log("image Col prop: " + selectedServiceDetails.price)

  return (
    <div>
      <StaticImage 
        alt='beach'
        src='../images/vintage-beach-short.jpg'
        className={imageStyles}
      />

      <StaticImage 
        alt='dinoBeach-stamp'
        src='../images/stamp_p.svg'
        className={stampStyles}
      />

      <div className={pricingLine1Styles}>
        Pricing Starts at
      </div>

      <div className={pricingContainerStyles}>
        <div className={priceLineStyles}>
          {selectedServiceDetails.price} USD
        </div>
        <FaArrowRight className={arrowStyles}/>
      </div>

      

    </div>
  )
}

export default ServiceImgCol