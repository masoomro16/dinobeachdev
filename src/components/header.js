import React, { useState } from 'react';
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import logo from "../images/title-logo.svg"
import wavesMenu from "../images/waves.svg"


function Header(props) {
    const [toggleMenu, setToggleMenu] = useState(false);
    
    return (
        <header className='flex justify-start justify-between items-center md:max-w-7xl max-w-md mx-auto '>
            <img 
                src={logo}
                alt="DinoBeach Logo"
                className='lg:w-40 w-32 relative md:static md:right-auto'
            />
            
           {/* <StaticImage
            alt="DinoBeach Logo"
            src="../images/title-logo.svg"
            className='scale-100 relative md:static right-[15%] md:right-auto'
            /> */}
            
            <nav className='justify-around'>
                <div onClick={()=>setToggleMenu(true)}>
                <img 
                    src={wavesMenu}
                    alt="DinoBeach Logo"
                    className='md:hidden w-16'
                />
                
                </div>
                <div className={`${toggleMenu ? 'block': 'hidden'} w-1/3 md:block flex flex-col z-10 absolute md:static `}>
                    <AiOutlineCloseCircle className='md:hidden' onClick={()=>{setToggleMenu(false)}} />
                    <Link to="/" className='title-text mx-6 hover:border-[#4fb3fa] hover:border-b-4 no-move'>Home</Link>
                    <Link to="/blog" className='title-text mx-6 hover:border-[#4fb3fa] hover:border-b-4 no-move'>Services</Link>
                    <Link to="/blog" className='title-text mx-6 hover:border-[#4fb3fa] hover:border-b-4 no-move'>Blog</Link>
                    <Link to="/blog" className='title-text mx-6 hover:border-[#4fb3fa] hover:border-b-4 no-move'>Resources</Link>
                    <Link to="/about" className='title-text mx-6 hover:border-[#4fb3fa] hover:border-b-4 no-move'>About</Link>
                    <Link to="/blog" className='title-text mx-6 hover:border-[#4fb3fa] hover:border-b-4 no-move'>Contact</Link>  
                </div>
            </nav> 
        </header>
    );
}

export default Header;