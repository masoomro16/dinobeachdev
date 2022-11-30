import React from 'react';
import BlogCard from './blogCard';
import waves from '../images/waves.svg';

// Will need to change to map the first 3 in blog articles once we have data

function BlogSection() {
  return (
    <div className='mb-28 md:mx-28 '>
        <h2 className='md:text-right text-blue md:text-5xl text-2xl title-text text-center'>blog</h2>
        <img
            src={waves}
            alt=''
            className='h-24 relative left-[24.5rem] top-12 rotate-[-30deg] hidden md:inline'
        />      
       
       <div className='flex flex-col items-center md:flex-row md:justify-between space-x-4 md:space-x-8'>
                <BlogCard />
                <BlogCard custom="mt-28"/>
                <BlogCard />
        </div>
      
    </div>
   );       
}

export default BlogSection;