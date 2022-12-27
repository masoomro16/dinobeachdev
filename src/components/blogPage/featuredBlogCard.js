import React, { useState } from "react";
import { Link } from "gatsby";

import { FaArrowRight } from "react-icons/fa";

function FeaturedBlogCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex-1 self-center">
      <Link to={`/blog/${props.item?.id}`}>
        {/* justify-center content-center self-center */}
        {/* 616pxw + 320px height */}
        {/* old values were w-auto and h-80 */}
        <div className="gradient-background rounded-xl h-72 w-72 md:w-[40.1042vw] md:h-[42.8954vh] flex justify-center my-6 ">
          {/* <div className='gradient-background rounded-xl h-80 w-80 md:w-[47%] flex justify-center content-center self-center my-6 min-w-[600px]'> */}
          {/* <div className='h-[97.5%] w-[97.5%] card rounded-xl justify-self-center self-center' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}> */}
          <div
            className="h-[97.5%] w-[97.5%] card rounded-xl justify-self-center self-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="h-full w-full flex flex-col justify-between">
              <h1 className={`sub-heading mx-8 my-4 title-text`}>
                {props.item?.title}
              </h1>
              <p
                className={`${
                  isHovered ? "hidden" : "inline"
                } self-center mb-36 content-text mx-8 semi-bold`}
              >
                {props.item?.description}
              </p>
              <FaArrowRight
                className={`self-end arrow mx-4 my-4 ${
                  isHovered ? "inline" : "hidden"
                }`}
                size={80}
              />

              {/* TEST STUFF */}
              {/* <h1 className={`text-xl md:${isHovered ? "text-6xl" : "text-5xl"} mx-8 my-4 title-text`}>
                  {props.item?.title}
                </h1> */}
              {/* <p className={`${isHovered ? "hidden" : "inline"} self-center mb-36 content-text mx-8 semi-bold`}>
                {props.item?.description}
              </p> */}
              {/* <FaArrowRight className={`self-end arrow mx-4 my-4 ${isHovered ? "inline" : "hidden"}`} size={80}/> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FeaturedBlogCard;

// For h1 - font size should be 6xl on hover and 5xl non-hover
