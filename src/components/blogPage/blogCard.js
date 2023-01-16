import React, { useState } from "react";
import { Link } from "gatsby";
import { FaArrowRight } from "react-icons/fa";

//? Why is the first card way more in the other cards on the home page

function BlogCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  console.log("blogCardprops: ", props);

  return (
    // w-[calc(100%_-_10rem)]
    <Link to={`/blog/${props.item?.id}` } className="flex-[0_0_calc(33.3333%_-_20px)]">
      {/* old width and height are 96 */}

      {/* w-72 md:w-[25vw] */}
      <div
        className={`gradient-background h-72 md:h-[51.4745vh] rounded-xl my-6 flex justify-center self-center md:${props.custom} `}
      >
        <div
          className="h-[97.5%] w-[97.5%] rounded-xl self-center card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className=" h-[90%] w-[90%] mt-[18.725px] flex  flex-col justify-between rounded-xl">
            <h3 className=" text-xl md:text-2xl title-text mx-5 mt-5">
              {props.item?.title}
            </h3>
            <p
              className={`${
                isHovered ? "hidden" : "inline"
              } self-center mb-36 content-text mx-6 semi-bold`}
            >
              {props.item?.description}
            </p>
            <FaArrowRight
              className={`self-end arrow ${isHovered ? "inline" : "hidden"}`}
              size={60}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
