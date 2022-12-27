import React from "react";

function ServiceCard(props) {
  return (
    <div className="bg-[#FADCD2] w-10/12 md:w-[25vw] flex flex-col justify-center items-center rounded-xl px-8 md:px-14 md:py-8 py-16 mx-8 mt-8 mb-10 relative min-h-[42.8954vh]">
      <div className="w-24 h-24 rounded-full gradient-bg absolute -top-12 md:-top-6  md:-left-10 flex justify-center items-center ">
        <h4 className="text-cream text-center md:-rotate-12">
          {props.packageName}
        </h4>
      </div>
      <div className="flex flex-col justify-between h-full">
        <h2 className="title-text servicecard-title">{props.title}</h2>
        <p className="servicecard-desription py-5">{props.description}</p>
        <h3 className="title-text servicecard-use py-5">{props.useCase}</h3>
      </div>
    </div>
  );
}

export default ServiceCard;
