import React, {useState} from 'react'
import {Link} from "gatsby"
import {FaArrowRight} from 'react-icons/fa';


function BlogCard(props) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/blog/${props.item?.id}`}>
    <div className={`gradient-background h-80 w-80 md:h-96 md:w-96 rounded-xl my-6 flex justify-center self-center md:${props.custom} shrink flex-grow-1 basis-1/3`} >
        <div className= "h-[97.5%] w-[97.5%] rounded-xl self-center card" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
          <div className=' h-[90%] w-[90%] mt-[18.725px] ml-[18.725px] flex  flex-col justify-between rounded-xl'>
            <h3 className=' text-xl md:text-2xl title-text mx-5 mt-5'>{props.item?.title}</h3>
            <p className={`${isHovered ? "hidden" : "inline"} self-center mb-36 content-text mx-6 semi-bold`}>{props.item?.description}</p>
            <FaArrowRight className={`self-end arrow ${isHovered ? "inline" : "hidden"}`} size={60}/>
          </div>
        </div>
    </div>
    </Link>
  )
}

export default BlogCard;
