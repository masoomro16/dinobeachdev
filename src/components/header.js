import React from 'react';
import { Link } from "gatsby"

function Header(props) {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
            </nav> 
        </header>
    );
}

export default Header;