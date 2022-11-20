import React from 'react'
import Layout from '../components/layout'
import Mailer from '../components/mailer'

const Contact = () => {
  return (
    <Layout>
        <div className='h-[calc(100vh_-_150px)]'>
            <Mailer />
        </div>
    </Layout>
  )
}

export default Contact