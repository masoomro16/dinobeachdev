import React from 'react';
import Layout from "../../components/layout"
import {graphql} from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'


function BlogPost(props) {
    const {data} = props
    return (
        <Layout pageTitle="Blog">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>
                ))
            }
        </Layout>
    );
}

export const query = graphql`
query {
    allMdx {
      nodes {
        id
        body
      }
    }
  }
`

export default BlogPost