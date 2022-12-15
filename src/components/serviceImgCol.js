import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

const ServiceImgCol = ({ selectedService, serviceData }) => {
  const price = selectedService.price;

  const selectedServiceItem = serviceData.find(
    ({ title }) => title === selectedService
  );
  console.log("image Col prop: " + selectedServiceItem.price);

  return (
    <div className="hidden md:block mx-auto">
      <StaticImage
        alt="beach"
        src="../images/vintage-beach-short.jpg"
        className="h-4/5 scale-[.90] rounded-t-[45%] w-96"
      />

      <StaticImage
        alt="dinoBeach-stamp"
        src="../images/stamp_p.svg"
        className="absolute bottom-[30%] left-[85%] z-10 rotating"
      />

      <div className="">
        <div className="content-text text-xl mb-5 ml-[1rem]">
          Pricing Starts at
        </div>

        <div className="title-text text-4xl text-center flex items-center ml-[1rem]">
          <div className="text-pink">{selectedServiceItem.price} USD</div>
          <FaArrowRight className="rounded-full arrow2 p-2 h-20 w-20  inline mb-5 hover:scale-110 ml-8" />
        </div>
      </div>
    </div>
  );
};

export default ServiceImgCol;
