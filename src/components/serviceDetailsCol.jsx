import React from "react";
import { serviceData } from "../constants/serviceData";

const ServiceDetailsCol = ({ selectedService }) => {
  const selectedServiceItem = serviceData.find(
    ({ title }) => title === selectedService
  );

  const newServiceDetail = (serviceDetail) => (
    <p className="mt-12 content-text text-xl text-bold">{serviceDetail}</p>
  );

  return (
    <div className="md:flex flex-col max-w-l hidden">
      {selectedServiceItem.details.map(newServiceDetail)}
    </div>
  );
};

export default ServiceDetailsCol;
