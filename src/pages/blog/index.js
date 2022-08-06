import React from 'react';
import Layout from "../../components/layout"
import {graphql} from "gatsby"

import BlogCard from '../../components/blogCard';
import FeaturedBlogCard from '../../components/featuredBlogCard';


function Blog(props) {
    const {data} = props
    return (
        <Layout pageTitle="Blog">
            <div className='w-full mx-auto md:max-w-7xl'>
                
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