import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero";
import Services from "../components/services";
import { StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
        <Hero />
        <Services />
        {/* <StaticImage
        alt="Beach Image"
        src="../images/vintage-beach1.jpg"/> */}
    </Layout>
  )
}

export default IndexPage
