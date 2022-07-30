import React from 'react';
import BlogCard from './blogCard';
import waves from '../images/waves.svg';

function BlogSection() {
  return (
    <div className='mx-28 mb-28'>
        <img
            src={waves}
            alt=''
            className='h-24 relative left-[24.5rem] top-12 rotate-[-30deg]'
        />      
       
       <div className='flex justify-between space-x-8'>
                <BlogCard />
                <BlogCard custom='mt-28'/>
                <BlogCard />
        </div>
      
    </div>
   );       
}

export default BlogSection;