import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/Layout';
import DocumentHead from '../components/DocumentHead';

export const templateQuery = graphql`
    query ($slug: String!){
      # Query for markdownRemark
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
      # Query for contentfulBlogPost
      contentfulBlogPost(
        slug: {
          eq: $slug
        }
      ){
        title,
        published(formatString: "Do MMMM, YYYY"),
        body {
          json
        }
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

/**
 * Conditionally render page based on the contents which can come
 * either from Contentful CMS or normal Markdown
 * 
 * @param {Object} props TemplateQuery through grahql above
 * 
 * @return {JSX} Elements to render on screen
 */
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
        <DocumentHead title={title} />
        <h1>{title}</h1>
        <p>{date}</p>
        {/* dangerouslySetInnerHTML: https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml */}
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </React.Fragment>
    );
  } else if (contentfulBlogPost) {
    /* All Contentful CMS posts */

    // Nested Destructuring `props.data.contentfulBlogPost`
    // And Renaming body.json to contentfulJSON and using it.
    const {
      title,
      published,
      body: { json: contentfulJSON }
    } = contentfulBlogPost;

    // To render Images from Contentful CMS
    const options = {
      renderNode: {
        // Node type is visible in graphql playground as `nodeType`
        "embedded-asset-block": (node) => {
          // We need node.data.target.fields for alt and url of image
          if (node.data.target.fields) {
            const { title, file } = node.data.target.fields;

            const alt = title['en-US'];
            const { url } = file['en-US'];

            return <img alt={alt} src={url} />
          }

          console.log('%cEither there is no image in contentful for this post, or something is broken while requesting image', 'color: salmon;');
          return null;
        }
      }
    };

    return (
      <React.Fragment>
        <DocumentHead title={title} />
        <h1>{title}</h1>
        <p>{published}</p>
        {/* To convert json data of contentful to react component */}
        {documentToReactComponents(contentfulJSON, options)}
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
