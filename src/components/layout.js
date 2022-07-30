import React from 'react';
import "../styles/style.css"
import Header from './header';
// styles
const pageStyles = {
    color: "#5D6567",
    backgroundColor: "#FAF6EE",
    padding: 96,
    margin: 0,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    borderTopWidth: 15,
    borderTopStyle: "solid",
    borderImage: "linear-gradient(to right, #EDA9B2, #23B4D9) 1",
    minHeight: "100vh"
}

function Layout(props) {
    const {pageTitle, children} = props

    return (
        <div style={pageStyles}>
            <title>{pageTitle}</title>
            <Header/>
            <main>
                {children}
            </main>
            <footer>
                <p>dinobeach.dev</p>
            </footer>
        </div>
    );
}

export default Layout;