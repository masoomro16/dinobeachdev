import React from "react"
import Layout from "../components/layout"

import { graphql } from "gatsby"


export const query = graphql`
query ($id: String!) {
  strapiPost(id: {eq: $id}) {
    title
    publishedAt
    id
    description
    image {
      children {
        ... on ImageSharp {
          id
        }
      }
      updatedAt
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
  console.log("post data: ")
  const post = props.data.strapiPost
  return (
    <Layout pageTitle={post.title}>
      <div>
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
        <h3>by {post.author.firstname} {post.author.lastname}</h3>
        <div>
          {post.body.data.body}
        </div>
      </div>
    </Layout>
  )
}
export default Post
