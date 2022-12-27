import React from "react";
import BlogCard from "../blogPage/blogCard";
import waves from "../../images/waves.svg";
import { graphql, useStaticQuery } from "gatsby";

// Will need to change to map the first 3 in blog articles once we have data

function BlogSection() {
  const results = useStaticQuery(graphql`
    query PreviewQuery {
      allStrapiPost(limit: 3, sort: { order: DESC, fields: publishedAt }) {
        edges {
          node {
            title
            image {
              id
              url
            }
            id
            publishedAt
          }
        }
      }
    }
  `);

  console.log("last 3 results: ", results);
  const listResults = results.allStrapiPost.edges.map((item) => {
    console.log("item: ", item);
    return <BlogCard item={item.node} key={item.id} />;
  });

  console.log(listResults);
  return (
    <div className="mb-5 md:mb-28 md:mx-28 relative">
      <h2 className="md:text-right text-blue sub-heading title-text text-center">
        blog
      </h2>
      <img
        src={waves}
        alt=""
        className="waves h-24 absolute left-[24.5rem] top-12 rotate-[-30deg] z-10"
      />
      <div className="flex flex-col items-center md:flex-row md:justify-around space-x-4 md:space-x-8 md:flex-wrap">
        {/* <BlogCard />
        <BlogCard custom="mt-28"/>
        <BlogCard/> */}
        {listResults}
      </div>
    </div>
  );
}

export default BlogSection;
