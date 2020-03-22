import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

const BlogPage = () => {
    const blogPosts = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title,
                            date
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <h1>Blog</h1>
            <p>All Posts goes here</p>
            <ol>
                {
                    blogPosts.allMarkdownRemark.edges.map(({ node }, i) => {
                        return (
                            <li key={i}>
                                <h2>{node.frontmatter.title}</h2>
                                <p>{node.frontmatter.date}</p>
                            </li>
                        );
                    })
                }
            </ol>
        </Layout>
    );
};

export default BlogPage;