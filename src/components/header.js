import React, { useState } from 'react';
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import { AiOutlineCloseCircle } from 'react-icons/ai';


function Header(props) {
    const [toggleMenu, setToggleMenu] = useState(false);
    
    return (
        <header className='flex justify-between items-center'>
           <StaticImage
            alt="DinoBeach Logo"
            src="../images/title-logo.svg"
            className='scale-50'    
            />
            
            
            <nav className='justify-around'>
                <div onClick={()=>setToggleMenu(true)}>
                    <StaticImage
                    src="../images/waves.svg"
                    alt="menu"
                    className='md:hidden'
                    />
                </div>
               

                <div className={`${toggleMenu ? 'block': 'hidden'} w-1/3 md:block flex flex-col z-10 absolute md:static`}>
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