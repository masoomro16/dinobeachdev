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

  return (
    <Layout>

      <div className='h-[calc(100vh_-_150px)] flex'>

        <div className='flex flex-col'>{serviceData.map(newServiceTitle)}</div>
        
        <div className='flex-col'>
        
        </div>


      </div>
    
    </Layout>
  )
}

export default Services

// Services CSS
{/* <div className='mb-12'>Place holder details 1</div>
<div className='my-12'>Place holder details 2</div>
<div className='mt-12'>Place holder details 3</div> */}