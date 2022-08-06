const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  console.log("createPages called")
  const { createPage } = actions;
  const result = await graphql(
    `
    query{
    allStrapiPost {
      edges {
        node {
          title
          id
        }
      }
    }
  }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog articles pages.
  const posts = result.data.allStrapiPost.edges;

  console.log("GATSBY NODE.JS FILE", posts)

  const PostTemplate = require.resolve('./src/templates/post.js');

  posts.forEach((category, index) => {
    createPage({
      path: `/blog/${category.node.id}`,
      component: PostTemplate,
      context: {
        id: category.node.id,
      },
    });
  });
};
