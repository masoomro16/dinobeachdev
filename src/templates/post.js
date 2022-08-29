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
      <div>
        <h1>{post.title}</h1>
        <GatsbyImage
          image={getImage(post.image?.localFile)}
          alt={post.image?.alternativeText}
        />
        <h2>{post.description}</h2>
        <h3>by {post.author.firstname} {post.author.lastname}</h3>
        <ReactMarkdown>
          {post.body.data.body}
        </ReactMarkdown>
      </div>
    </Layout>
  )
}
export default Post
