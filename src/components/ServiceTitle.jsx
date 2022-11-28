import React, {useState} from 'react'
import {GoTriangleRight, GoTriangleDown} from 'react-icons/go';
import { serviceData } from '../constants/serviceData';
import { FaArrowRight } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';

const ServiceTitle = ({service, selectedService, changeSelectedService, serviceData}) => {
  const inactiveTitle = "text-4xl mt-12 text-blue font-bold title-text hover:text-5xl hover:text-pink";
  const activeTitle = "mt-12 font-bold title-text text-5xl text-pink"

  const selectedServiceDetails = serviceData.find(({title})=> title === selectedService);

  return (
    <div>
      <h2 
        className={ selectedService===service.title ? activeTitle : inactiveTitle} 
        onClick={()=>changeSelectedService(service.title)}
        >
          {service.title}
      </h2>
      <div >
        <div className='md:hidden'>
                {selectedServiceDetails.details}
              </div>
              
              <div className='md:hidden'>
                {selectedServiceDetails.price}
              </div>
      </div>
      
    </div>
   
        
  )
}

export default ServiceTitle