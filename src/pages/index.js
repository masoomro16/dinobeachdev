import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero";
import Services from "../components/services";
import BlogSection from "../components/blogSection";
import footprint from "../components/footprint";
import { StaticImage } from 'gatsby-plugin-image'
import Footprint from "../components/footprint";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
        <Hero />
        <Footprint />
        <Services />
        <BlogSection />
        {/* <StaticImage
        alt="Beach Image"
        src="../images/vintage-beach1.jpg"/> */}
    </Layout>
  )
}

export default IndexPage
