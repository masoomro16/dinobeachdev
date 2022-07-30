import React from 'react'

function BlogCard(props) {
  return (
    <div className={`gradient-background h-96 w-96 rounded-xl my-6 flex justify-center ${props.custom}`} >
        <div className='h-[97.5%] w-[97.5%] rounded-xl self-center bg-[#FAF6EE]'>
          <div className=' h-[90%] w-[90%] mt-[18.725px] ml-[18.725px] flex justify-start items-start rounded-xl'>
            <h3 className='text-2xl title-text mx-5 mt-5'>CREATE PARTY GAMES WITH EXPRESS.JS AND SOCKET.IO</h3>
          </div>
        </div>
    </div>
  )
}

export default BlogCard;
