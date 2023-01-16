import React from "react";
import Layout from "../components/layout";
import leftImg from "../images/about-img-left.png";
import rightImg from "../images/about-img-right.png";

function About(props) {
  return (
    <Layout pageTitle="About">
      {/* mx-[7.7865vw] md:max-w-7xl max-w-md */}
      <div className="mx-8 md:mx-auto max-w-7xl">
      {/* <div className="mx-auto max-w-7xl"> */}
        <div className="grid grid-rows-[125px_400px_125px] grid-cols-5 justify-items-stretch">
          <img
            className="col-span-2 row-start-1  col-start-1"
            src={leftImg}
            alt="about image"
          />
          <div className="col-span-3 row-start-2 row-end-3 col-start-2 z-40">
            {/* Old Text Size: text-2xl md:text-7xl */}
            <h1 className="title-text gradient-text font-extrabold page-heading">
              We're Maira & Alex, something goes here
            </h1>
          </div>
          <img
            className="col-span-2 row-start-2 row-end-4 col-start-4"
            src={rightImg}
            alt="about image"
          />
        </div>
        <div>
          <p>
          In the north of Amsterdam a self-sufficient city state called 
          Republica is rising. A former industrial area is being transformed 
          into a bustling city district. Short Guy is a build-to-rent housing 
          scheme within an assembly of six buildings. Republica is the 
          masterplan of Marc Koehler Architects. The design of Short Guy is a 
          collaboration between Loer Architecten and Loerakker Olsson Architects, 
          commissioned by developers Banlieu and Vink Bouw.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
