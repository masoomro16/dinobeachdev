import React from 'react'
import Layout from '../components/layout'
import Mailer from '../components/mailer'
import ContactHeader from '../components/contactHeader'

const Contact = () => {
  return (
    <Layout>
        <div className='h-[calc(100vh_-_150px)] flex mx-28'>
            <ContactHeader />
            <Mailer />
        </div>
    </Layout>
  )
}

export default Contact