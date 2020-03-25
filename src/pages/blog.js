import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

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
                        },
                        fields {
                            slug
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
                            <Link to={`/blog/${node.fields.slug}`}>
                                <li key={i}>
                                    <h2>{node.frontmatter.title}</h2>
                                    <p>{node.frontmatter.date}</p>
                                </li>
                            </Link>
                        );
                    })
                }
            </ol>
        </Layout>
    );
};

export default BlogPage;