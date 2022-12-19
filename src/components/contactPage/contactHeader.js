import React from "react";
import "../../styles/style.css";
import dinoFoot from "../../images/trex_footprint.svg";

const ContactHeader = () => {
  const dinoPrintStyles = "h-16 w-[3.2381vw] hidden md:inline relative";
  return (
    <div className=" max-w-[75%] md:max-w-[33%] mt-12 mx-auto">
      <h2 className="title-text gradient-text font-extrabold contact-heading">
        Interested in working with us? Let's Talk
      </h2>

      {/* dino Prints */}
      <img
        src={dinoFoot}
        alt="dino footprint "
        className={`${dinoPrintStyles} left-[8.3333vw] rotate-[125deg]`}
        // left-32
      />
      <img
        src={dinoFoot}
        alt="dino footprint "
        className={`${dinoPrintStyles} left-[9.375vw] top-[5.2083vw] rotate-90`}
      />
      <img
        src={dinoFoot}
        alt="dino footprint "
        className={`${dinoPrintStyles} left-[12.5vw] top-[3.125vw] rotate-[70deg]`}
      />
      <img
        src={dinoFoot}
        alt="dino footprint "
        className={`${dinoPrintStyles} left-[14.5833vw] bottom-[2.6042vw] rotate-[50deg]`}
      />
    </div>
  );
};

export default ContactHeader;
