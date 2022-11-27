import React, { useState } from 'react'
import Layout from '../components/layout'
import ServiceTitle from '../components/ServiceTitle';
import { serviceData } from '../constants/serviceData';
import ServiceDetailsCol from '../components/serviceDetailsCol';
import ServiceImgCol from '../components/serviceImgCol';




const Services = (props) => {

  // Selected Service State

  const [selectedService, setSelectedService] = useState(serviceData[0].title);

  const changeSelectedService = (serviceName) => { 
    setSelectedService(serviceName)
  }

  // Mapped Service Titles

  const newServiceTitle = (service) => {
    return (
      <ServiceTitle 
        key={service.id}
        title={service.title}
        service={service}
        selectedService={selectedService}
        changeSelectedService={changeSelectedService}
      />
    );
  }

  const serviceDetails = serviceData.find(({title})=> title === selectedService);

  return (
    <Layout>

      <div className='h-[calc(100vh_-_150px)] flex flex-col md:flex-row'>

        {/* Title Column */}
        <div className='flex flex-col min-w-[500px] ml-16'>{serviceData.map(newServiceTitle)}</div>
        <ServiceDetailsCol 
          selectedService={selectedService}
        />
        <ServiceImgCol 
          selectedService={selectedService}
          serviceData={serviceData}
        />


      </div>
    
    </Layout>
  )
}

export default Services