import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/Layout';

import { posts, post } from '../styles/modules/blog.module.scss';

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
            <ol className={posts}>
                {
                    blogPosts.allMarkdownRemark.edges.map(({ node }, i) => {
                        return (
                            <li className={post} key={i}>
                                <Link to={`/blog/${node.fields.slug}`}>
                                    <h2>{node.frontmatter.title}</h2>
                                    <p>{node.frontmatter.date}</p>
                                </Link>
                            </li>
                        );
                    })
                }
            </ol>
        </Layout>
    );
};

export default BlogPage;