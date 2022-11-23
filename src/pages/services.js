import React, { useState } from 'react'
import Layout from '../components/layout'
import ServiceTitle from '../components/ServiceTitle';
import { serviceData } from '../constants/serviceData';
import { StaticImage } from 'gatsby-plugin-image';
import { FaArrowRight } from 'react-icons/fa';



const Services = (props) => {

  const [selectedService, setSelectedService] = useState(serviceData[0].title);

  const changeSelectedService = (serviceName) => { 
    setSelectedService(serviceName)
  }

  // Mapped Services
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

      <div className='h-[calc(100vh_-_150px)] flex flex-col md:flex-row'>

        {/* Title Column */}
        <div className='flex flex-col min-w-[500px] ml-16'>{serviceData.map(newServiceTitle)}</div>
        
        {/* Service Details Column */}
        <div className='md:flex md:flex-col max-w-l hidden'>
          {serviceDetails.details.map(newService)}
        </div>

        {/* Image and Pricing Column  */}
        <div className='md:block hidden'>

        <StaticImage
            alt="beach"
            src="../images/vintage-beach-short.jpg"
            className='h-4/5 scale-[.90] rounded-t-[45%] hidden w-96 md:block'  
          />
          <StaticImage src="../images/stamp_p.svg" className='absolute bottom-[20%] left-[80%] z-10 rotating hidden md:block'/>
          
          <div className='ml-4'>
            <div className='content-text text-xl text-left mb-5'>
              Pricing Starts At
            </div> 

            <div className='title-text text-pink text-4xl text-center flex'>
            {serviceDetails.price} USD.
            <FaArrowRight className='arrow2 rounded-full h-20 w-20 p-2 absolute left-[80%] bottom-[5%] hover:h-24 hover:w-24' />
            </div>

          </div>
      
        
        </div>


      </div>
    
    </Layout>
  )
}

export default Services