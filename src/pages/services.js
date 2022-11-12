import React, { useState } from 'react'
import Layout from '../components/layout'
import ServiceTitle from '../components/ServiceTitle';
import { StaticImage } from 'gatsby-plugin-image';

const placeHolderData = [
  {
    id: 0,
    name: "Service 1",
    subData:["Subtask 1.1", "subtask 2.1", "subtask 3.1", "subtask 4.1", "subtask 5.1"]
  },
  {
    id:1,
    name: "Service 2",
    subData:["Subtask 1.2", "subtask 2.2", "subtask 3.2", "subtask 4.2", "subtask 5.2"]
  },
  {
    id:2,
    name: "Service 3",
    subData:["Subtask 1.3", "subtask 2.3", "subtask 3.3", "subtask 4.3", "subtask 5.3"]
  },
  {
    id:3,
    name: "Service 4",
    subData:["Subtask 1.4", "subtask 2.4", "subtask 3.4", "subtask 4.4", "subtask 5.4"]
  },
  {
    id:4,
    name: "Service 5",
    subData:["Subtask 1.5", "subtask 2.5", "subtask 3.5", "subtask 4.5", "subtask 5.5"]
  },
]
 
const services = (props) => {

  return (
    <Layout>

      <div className='h-[calc(100vh_-_150px)] flex'>
        <div>
          <ServiceTitle />
          <ServiceTitle />
          <ServiceTitle />
          <ServiceTitle />
          <ServiceTitle />
        </div>
        
        
        <div className='flex-col content-text text-2xl'>
            <div className='mb-12'>Place holder details 1</div>
            <div className='my-12'>Place holder details 2</div>
            <div className='mt-12'>Place holder details 3</div>
        </div>
        
        <div>
          {/* Div for Image and pricing and the arrow that I assume is clickable */}
        </div>
      

      </div>
    
    </Layout>
  )
}

export default services