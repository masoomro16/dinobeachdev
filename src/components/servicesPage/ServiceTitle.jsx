import React, { useState } from "react";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import { serviceData } from "../../constants/serviceData";
import { FaArrowRight } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";

// hover inactive text: hover:text-[3.125vw]
const ServiceTitle = ({
  service,
  selectedService,
  changeSelectedService,
  serviceData,
}) => {
  const inactiveTitle =
    "inactive-service-card mt-12 text-blue font-bold title-text hover:scale-110 hover:text-pink";
  const activeTitle =
    "z-10 mt-12 font-bold title-text text-pink mb-4 md:mb-0 active-service-card";

  const selectedServiceItem = serviceData.find(
    ({ title }) => title === selectedService
  );

  const currentDetails = selectedServiceItem.details;

  const newDetail = (detail, idx) => <p key={idx + detail}>{detail}</p>;

  return (
    <div className="min-w-[33vw]">
      <h2
        className={
          selectedService === service.title ? activeTitle : inactiveTitle
        }
        onClick={() => changeSelectedService(service.title)}
      >
        {service.title}
      </h2>
      <div
        className={`md:hidden ${
          selectedService === service.title ? "block" : "hidden"
        } content-text`}
      >
        <div>{currentDetails.map(newDetail)}</div>

        <div className="mt-2">
          <div className="inline">
            {" "}
            Pricing Starts at {selectedServiceItem.price} USD{" "}
          </div>
          <FaArrowRight className="h-[8%] w-[8%] arrow2 rounded-full p-1 inline ml-3 mb-1" />
        </div>
      </div>
    </div>
  );
};

export default ServiceTitle;
