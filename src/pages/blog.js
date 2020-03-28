import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/Layout';
import DocumentHead from '../components/DocumentHead';

import { posts, post } from '../styles/modules/blog.module.scss';

const BlogPage = () => {
    const blogPosts = useStaticQuery(graphql`
        query {
            # Query for allMarkdownRemark
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
            },
            # Query for allContentfulBlogPost
            allContentfulBlogPost (
                sort: {
                    fields : published,
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title,
                        slug,
                        published (formatString: "Do MMMM, YYYY")
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <DocumentHead title="Blog" />
            <h1>Blog</h1>
            <p>All Posts goes here</p>
            <ol className={posts}>
                {/* All Markdown posts */}
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
                {/* All Contentful CMS posts */}
                {
                    blogPosts.allContentfulBlogPost.edges.map(({ node }, i) => {
                        return (
                            <li className={post} key={i}>
                                <Link to={`/blog/${node.slug}`}>
                                    <h2>{node.title}</h2>
                                    <p>{node.published}</p>
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