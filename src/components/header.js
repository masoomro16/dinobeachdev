import React from 'react';
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

function Header(props) {
    return (
        <header className='flex'>
           <StaticImage
            alt="DinoBeach Logo"
            src="../images/title-logo.svg"/>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
            </nav> 
        </header>
    );
}

export default Header;