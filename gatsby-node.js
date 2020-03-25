// Gatsby Node APIs

const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.

    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md');

        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');
    const response = await graphql(`
        query {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
    `);

    response.data.allMarkdownRemark.edges.forEach(edge => {
        const { slug } = edge.node.fields;
        createPage({
            component: blogTemplate,
            path: `/blog/${slug}`,
            context: {
                slug
            }
        });
    });
}