import * as React from "react";
import "../styles/style.css";
import "../styles/homePage.styles.css";
import Layout from "../components/layout";
import Hero from "../components/homePage/hero";
import Services from "../components/homePage/services";
import BlogSection from "../components/homePage/blogSection";
import { StaticImage } from "gatsby-plugin-image";
import Footprint from "../components/homePage/footprint";

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
  );
};

export default IndexPage;
