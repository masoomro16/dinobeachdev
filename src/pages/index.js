import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
}

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
        <h1 style={headingStyles} className="text-blue-600">
          dinoBeachdev
        </h1>
        {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/vintage-beach1.jpg"/> */}
    </Layout>
  )
}

export default IndexPage
