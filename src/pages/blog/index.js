import React from "react";
import Layout from "../../components/layout";
import { graphql, useStaticQuery } from "gatsby";

import BlogCard from "../../components/blogCard";
import FeaturedBlogCard from "../../components/featuredBlogCard";
import { list } from "postcss";

function Blog(props) {
  const { data } = props;

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
  `);

  console.log("blog results: ", results);

  const listResults = results.allStrapiPost.edges.map((item, idx) => {
    if (idx === 0 || idx === 1)
      return <FeaturedBlogCard key={item.id} item={item.node} />;
    else return <BlogCard key={item.id} item={item.node} />;
  });

  return (
    <Layout pageTitle="Blog">
      <div className="w-full mx-auto md:max-w-7xl">
        {/* First Row */}
        <div className="flex flex-col md:justify-between md:flex-row my-10 md:gap-x-12">
          {listResults[0]}
          {listResults[1]}
        </div>

        {/* Second Row */}
        <div className="flex flex-col content-center flex-wrap md:flex-row md:justify-between my-10 w-full">
          {listResults.slice(2)}
        </div>
      </div>
    </Layout>
  );
}

export default Blog;

// JavaScript Object to contain the needed CSS including a variable to control the number of instances of the BlogCard
// Need to use this to circle through the Grid
//Grid template area:
//Header1 (Index0), Header 2(index1)
//regular regular regular (repeat x number of times (??) )
