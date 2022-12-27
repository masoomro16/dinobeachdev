import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

const ServiceImgCol = ({ selectedService, serviceData }) => {
  const price = selectedService.price;

  const selectedServiceItem = serviceData.find(
    ({ title }) => title === selectedService
  );
  console.log("image Col prop: " + selectedServiceItem.price);
  // Old width: w-96 h-4/5
  return (
    <div className="hidden md:block mx-auto min-w-[33vw]">
      {/* Goal is 384px width */}
      {/* flex flex-col flex-wrap */}
      <div className="relative">
        <StaticImage
          alt="beach"
          src="../images/vintage-beach-short.jpg"
          className="relative h-full scale-[.90] rounded-t-[45%] w-[25vw]"
        />

        {/* old width for above - 96 */}

        {/* old width for below - none */}

        <StaticImage
          alt="dinoBeach-stamp"
          src="../images/stamp_p.svg"
          className="absolute right-[20%] top-[70%] z-10 rotating w-[12.4349vw]"
        />
      </div>

      <div className="mt-10">
        <div className="content-text ml-[1rem] pricing-small-text">
          Pricing Starts at
        </div>
        {/*old arrow width w-20  */}
        <div className="title-text text-4xl text-center flex items-center ml-[1rem] price-text">
          <div className="text-pink">{selectedServiceItem.price} USD</div>
          <FaArrowRight className="rounded-full arrow2 p-2 h-20 inline mb-5 hover:scale-110 ml-[2.0833vw] w-[5.2083vw]" />
        </div>
      </div>
    </div>
  );
};

export default ServiceImgCol;
