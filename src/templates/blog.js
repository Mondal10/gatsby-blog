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
      }
    }
`;

const Blog = (props) => {
  // Nested Destructuring `props.data.markdownRemark`
  const {
    html,
    frontmatter: { title, date }
  } = props.data.markdownRemark;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      {/* dangerouslySetInnerHTML: https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml */}
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
};

export default Blog;
