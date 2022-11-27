import React from 'react'
import { serviceData } from '../constants/serviceData'

const ServiceDetailsCol = ({selectedService}) => {
  const selectedServiceDetails = serviceData.find(({title})=> title === selectedService);

  const newServiceDetail = (serviceDetail) => <p className='mt-12 content-text text-xl text-bold'>{serviceDetail}</p>

  return (
    <div className='flex flex-col max-w-l'>
      {selectedServiceDetails.details.map(newServiceDetail)}
    </div>
  )
}

export default ServiceDetailsCol