import React from "react";
import "../../styles/blog.styles.css";
import Layout from "../../components/layout";
import { graphql, useStaticQuery } from "gatsby";

import BlogCard from "../../components/blogPage/blogCard";
import FeaturedBlogCard from "../../components/blogPage/featuredBlogCard";
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
      {/* md:h-[calc(100vh_-_150px)] relative flex flex-wrap md:flex-nowrap justify-center items-center mx-[7.7865vw] md:max-w-7xl max-w-md" */}
      <div className="mx-[7.7865vw] md:max-w-7xl max-w-md">
      {/* <div className="w-full mx-auto md:max-w-7xl"> */}
      
        {/* First Row */}
        {/* Was md:gap-x-12 */}
        {/* md:gap-x-[3.125vw] */}
        {/* border-2 border-solid border-blue */}
        <div className=" md:max-w-[100%] flex flex-col mx-auto content-center justify-between md:flex-row mt-10 md:gap-x-8 ">
          {listResults[0]}
          {listResults[1]}
        </div>

        {/* Second Row */}
        <div className="md:max-w-[100%] flex flex-col mx-auto content-center flex-wrap md:flex-row mb-10 gap-x-6">
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
