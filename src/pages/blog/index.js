import React from 'react';
import Layout from "../../components/layout"
import {graphql} from "gatsby"

import BlogCard from '../../components/blogCard';
import FirstBlogCard from '../../components/firstBlogCard';
import SecondBlogCard from '../../components/secondBlogCard';


function Blog(props) {
    const {data} = props
    return (
        <Layout pageTitle="Blog">
            <div className='mx-auto w-full'>
                
                {/* First Row */}
                <div className='flex justify-between'>
                    <FirstBlogCard />
                    <SecondBlogCard /> 
                </div>

                {/* Second Row */}
                <div className='flex justify-around'>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
           
            
           
        </Layout>
    );
}

export default Blog