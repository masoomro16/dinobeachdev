import React, {useState} from 'react'

const ServiceTitle = ({service, selectedService, changeSelectedService}) => {
  const inactiveTitle = "text-4xl mt-12 text-blue font-bold title-text hover:text-5xl hover:text-pink";
  const activeTitle = "mt-12 font-bold title-text text-5xl text-pink"
  console.log(service.title, selectedService);


  return (
   
        <h2 className={ selectedService===service.title ? activeTitle : inactiveTitle} onClick={()=>changeSelectedService(service.title)}
        >{service.title}</h2>
  )
}

export default ServiceTitle