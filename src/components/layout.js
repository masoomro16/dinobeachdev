import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import "../styles/style.css"
import Header from './header';
// styles
const pageStyles = {
    color: "#5D6567",
    backgroundColor: "#FAF6EE",
    padding: 0,
    margin: 0,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    borderTopWidth: 15,
    borderTopStyle: "solid",
    borderImage: "linear-gradient(to right, #EDA9B2, #23B4D9) 1",
}

function Layout(props) {
    const {pageTitle, children} = props

    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    return (
        <div style={pageStyles}>
            <title>{pageTitle}</title>
            <Header/>
            <main>
                {children}
            </main>
            <footer style={{
                height: "60px",
                backgroundImage: "linear-gradient(to right, #EDA9B2, #23B4D9)",
                marginBottom: 0
            }}>
                <p>dinobeach.dev 2024</p>
            </footer>
        </div>
    );
}

export default Layout;