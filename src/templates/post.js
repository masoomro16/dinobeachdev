import React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import ReactMarkdown from 'react-markdown'

export const query = graphql`
query ($id: String!) {
  strapiPost(id: {eq: $id}) {
    title
    publishedAt
    id
    description
    image {
      id
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    body {
      data {
        body
      }
    }
    author {
      firstname
      lastname
    }
  }
}

`;


const Post = (props) => {
  const post = props.data.strapiPost
  console.log("post data: ", post)
  return (
    <Layout pageTitle={post.title}>
      <div className="flex flex-col items-center mx-32">
      
      {/* Top Row */}
        <div className='h-1/3 w-full mb-6'>
          <div className="flex flex-row justify-center">
             <h1 className="title-text gradient-text text-7xl self-center ml-8 w-1/2">Creating Pary Games with Express.js and Socket.io</h1>
          <GatsbyImage
            image={getImage(post.image?.localFile)}
            alt={post.image?.alternativeText}
            className="rounded-full h-full mr-8 w-1/2"
          />
          </div> 
        </div>
  
        <h2>{post.description}</h2>
        <h3>by {post.author.firstname} {post.author.lastname}</h3>
        <ReactMarkdown className="mx-36 content-text">
          {post.body.data?.body}
        </ReactMarkdown>
      
      </div>
    </Layout>
  )
}
export default Post
