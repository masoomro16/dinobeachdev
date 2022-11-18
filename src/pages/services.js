import React, { useState } from 'react'
import Layout from '../components/layout'
import ServiceTitle from '../components/ServiceTitle';
import { serviceData } from '../constants/serviceData';
import { StaticImage } from 'gatsby-plugin-image';



const Services = (props) => {
  const [selectedService, setSelectedService] = useState(serviceData[0].title);

  const changeSelectedService = (serviceName) => { 
    setSelectedService(serviceName)
  }

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

  const newService = (serviceDetail) => <p className='mt-12 content-text text-xl text-bold'>{serviceDetail}</p>
  console.log(serviceDetails);


  return (
    <Layout>

      <div className='h-[calc(100vh_-_150px)] flex'>

        <div className='flex flex-col min-w-[500px] ml-16'>{serviceData.map(newServiceTitle)}</div>
        
        <div className='flex flex-col'>
          {serviceDetails.details.map(newService)}
        </div>


      </div>
    
    </Layout>
  )
}

export default Services