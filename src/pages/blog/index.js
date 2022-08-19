import React from 'react';
import Layout from "../../components/layout"
import {graphql, useStaticQuery} from "gatsby"

import BlogCard from '../../components/blogCard';
import FeaturedBlogCard from '../../components/featuredBlogCard';

function Blog(props) {
    const {data} = props

    const results = useStaticQuery(graphql`
    query HeaderQuery {
        allStrapiPost {
            edges {
              node {
                id
                publishedAt
                title
                updatedAt
                description
                author {
                  firstname
                  lastname
                }
                body {
                  data {
                    body
                  }
                }
                image {
                  children {
                    ... on ImageSharp {
                      id
                    }
                  }
                }
              }
            }
          }
    }
  `)

  console.log("blog results: ",results)

  const listResults = results.allStrapiPost.edges.map((item, idx) => {
    if(idx===0 || idx===1) 
        return <FeaturedBlogCard item={item.node}/>
    else 
        return <BlogCard item={item.node}/>
  })

    return (
        <Layout pageTitle="Blog">
            <div className='w-full mx-auto md:max-w-7xl'>

                {listResults}
                
                {/* First Row */}
                <div className='flex flex-col md:justify-between md:flex-row my-10'>
                    <FeaturedBlogCard />
                    <FeaturedBlogCard />
                </div>

                {/* Second Row */}
                <div className='flex flex-col md:flex-row md:justify-between my-10'>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
           
            
           
        </Layout>
    );
}

export default Blog