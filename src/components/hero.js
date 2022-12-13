import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { stamp } from "../images/stamp_p.svg";

function Hero() {
  console.log("Height: " + window.innerHeight);
  console.log("Width: " + window.innerWidth);

  return (
    <div className="md:h-[calc(100vh_-_150px)] relative flex flex-wrap md:flex-nowrap justify-center items-center mx-5 md:mx-auto md:max-w-7xl max-w-md">
      <div className="flex-col z-20">
        {/* md:text-8xl text-4xl */}
        <h1 className="block min-h-[300] title-text large-text font-extrabold  gradient-text pt-2">
          {" "}
          creating fun digital experiences
        </h1>
        <p className="p-2">
          we're a web development team specializing in fast, unique websites
        </p>
        <button className="rounded-full bg-[#FFDE9D] md:text-lg  text-sm p-5">
          find out how
        </button>
      </div>
      <StaticImage
        src="../images/stamp_p.svg"
        className="absolute bottom-[10%] z-10 rotating hidden md:block"
      />
      {/* <img src={stamp} /> */}
      <div>
        <StaticImage
          alt="beach"
          src="../images/vintage-beach-short.jpg"
          // className='scale-[.80] rounded-t-[45%] hidden md:block'
          className="h-2/5 scale-[.90] rounded-t-[45%] hidden md:block"
        />
      </div>
    </div>
  );
}

export default Hero;

/*
old scale property
scale-[.5]
*/
