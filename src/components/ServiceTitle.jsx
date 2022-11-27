import React, {useState} from 'react'
import {GoTriangleRight, GoTriangleDown} from 'react-icons/go';
import { serviceData } from '../constants/serviceData';
import { FaArrowRight } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';

const ServiceTitle = ({service, selectedService, changeSelectedService}) => {
  const inactiveTitle = "text-4xl mt-12 text-blue font-bold title-text hover:text-5xl hover:text-pink";
  const activeTitle = "mt-12 font-bold title-text text-5xl text-pink"

  return (
      <div>
        {/* Title */}
         <h2 className={ `${selectedService===service.title ? activeTitle : inactiveTitle} inline-block md:block`} onClick={()=>changeSelectedService(service.title)}
        >{service.title}</h2>
        
        {/* Mobile arrowStyles */}
        {selectedService===service.title ? <GoTriangleDown className={arrowStyles} /> : <GoTriangleRight className={arrowStyles} />}
        
        
        {/* Mobile Details */}
        
        <div className={`md:hidden content-text ${selectedService === service.title ? 'block' : 'hidden'}`} >
          {service.details}
        </div>
        
        <div className={`md:hidden content-text mt-4 ${selectedService === service.title ? 'flex' : 'hidden'}`}>
          <p className='self-center'>Prices Starting at ${service.price}</p>
          <FaArrowRight className='arrow2 rounded-full h-[7%] w-[7%] p-2 ml-2' />
        </div>

      </div>
       
  )
}

export default ServiceTitle