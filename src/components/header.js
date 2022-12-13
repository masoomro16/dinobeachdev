import React, { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import logo from "../images/title-logo.svg";
import wavesMenu from "../images/waves.svg";
import dinoFoot from "../images/trex_footprint.svg";

function Header(props) {
  const [toggleMenu, setToggleMenu] = useState(false);

    // if the user does not close out the menu
    // but tries to change screen width manually
    // might not be necessary in production??
    useEffect(()=> { 
        if(size.width > 768) {
            setToggleMenu(false)
        }
    })
    
    return (
        <header className='p-5 flex  justify-between  items-center md:max-w-7xl max-w-md mx-auto '>
            <Link to="/" className='d:w-2/12 w-4/12 relative md:static md:right-auto'>
                <img 
                    src={logo}
                    alt="DinoBeach Logo"
                    className=''
                    width={180}
                />
            </Link>
            
           {/* <StaticImage
            alt="DinoBeach Logo"
            src="../images/title-logo.svg"
            className='scale-100 relative md:static right-[15%] md:right-auto'
            /> */}

      <nav className="justify-around">
        <div onClick={() => setToggleMenu(true)}>
          <img
            src={wavesMenu}
            alt="DinoBeach Logo"
            className="md:hidden w-16"
          />
        </div>
        {/* full page menu */}
        {/* <div className={`${toggleMenu ? 'block': 'hidden'} w-1/3 md:block flex flex-col z-10 absolute md:static `}> */}
        <div
          className={`${
            toggleMenu ? "block no-scroll h-screen gradient" : "hidden"
          } m:w-1/3  w-full md:block md:bg-transparent flex flex-col justify-center z-40 absolute top-[-15px] left-0 md:static `}
        >
          <AiOutlineCloseCircle
            size={70}
            color={"white"}
            onClick={() => {
              setToggleMenu(false);
            }}
            className={`md:hidden ${
              toggleMenu && "absolute top-0 right-0 padding-20"
            }`}
          />
          <Link
            to="/"
            className={`title-text  md:text-base lg:text-lg mx-6 hover:text-blue no-move ${
              toggleMenu ? "text-6xl text-white" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`title-text md:text-base lg:text-lg mx-6 hover:text-blue no-move ${
              toggleMenu ? "text-6xl text-white" : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/blog"
            className={`title-text  md:text-base lg:text-lg mx-6 hover:text-blue no-move ${
              toggleMenu ? "text-6xl text-white" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            to="/blog"
            className={`title-text  md:text-base lg:text-lg mx-6 hover:text-blue no-move ${
              toggleMenu ? "text-6xl text-white" : ""
            }`}
          >
            Resources
          </Link>
          <Link
            to="/about"
            className={`title-text  md:text-base lg:text-lg mx-6 hover:text-blue no-move ${
              toggleMenu ? "text-6xl text-white" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`title-text  md:text-base lg:text-lg mx-6 hover:text-blue no-move ${
              toggleMenu ? "text-6xl text-white" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

/*
hover state later
hover:after:content-[url("../images/trex_footprint.svg")]
*/
