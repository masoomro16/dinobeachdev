import React from 'react';
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

function Header(props) {
    return (
        <header className='flex justify-between items-center'>
           <StaticImage
            alt="DinoBeach Logo"
            src="../images/title-logo.svg"
            className='scale-50'    
            />
            <nav className='flex justify-around'>
                <Link to="/" className='title-text mx-6 hover:border-[#4fb3fa] hover:border-b-4 no-move'>Home</Link>
                <Link to="/blog" className='title-text mx-6 hover:border-[#4fb3fa] hover:border-b-4 no-move'>Services</Link>
                <Link to="/blog" className='title-text mx-6 hover:border-[#4fb3fa] hover:border-b-4 no-move'>Blog</Link>
                <Link to="/blog" className='title-text mx-6 hover:border-[#4fb3fa] hover:border-b-4 no-move'>Resources</Link>
                <Link to="/about" className='title-text mx-6 hover:border-[#4fb3fa] hover:border-b-4 no-move'>About</Link>
                <Link to="/blog" className='title-text mx-6 hover:border-[#4fb3fa] hover:border-b-4 no-move'>Contact</Link>
            </nav> 
        </header>
    );
}

export default Header;