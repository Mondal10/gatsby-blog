import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export const templateQuery = graphql`
    query ($slug: String!){
      markdownRemark(
        fields:{
          slug:{
            eq: $slug
          }
        }
      ){
        frontmatter{
          title,
          date
        }
        html
      },
      contentfulBlogPost(
        slug: {
          eq: $slug
        }
      ){
        title,
        published(formatString: "Do MMMM, YYYY")
      }
    }
`;

const Blog = (props) => {
  return (
    <Layout>
      {renderBlogPost(props)}
    </Layout>
  )
};

const renderBlogPost = ({ data }) => {
  const { markdownRemark, contentfulBlogPost } = data;

  if (markdownRemark) {
    /* All Markdown posts */

    // Nested Destructuring `props.data.markdownRemark`
    const {
      html,
      frontmatter: { title, date }
    } = markdownRemark;

    return (
      <React.Fragment>
        <h1>{title}</h1>
        <p>{date}</p>
        {/* dangerouslySetInnerHTML: https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml */}
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </React.Fragment>
    );
  } else if (contentfulBlogPost) {
    /* All Contentful CMS posts */

    const { title, published } = contentfulBlogPost;

    return (
      <React.Fragment>
        <h1>{title}</h1>
        <p>{published}</p>
      </React.Fragment>
    );
  } else {
    return (
      <h1>
        No Contents available
      </h1>
    );
  }
}

export default Blog;
