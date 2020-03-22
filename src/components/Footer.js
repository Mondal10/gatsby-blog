import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
    const footerData = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);

    return (
        <footer>
            <p>Created by {footerData.site.siteMetadata.author}, © 2020</p>
        </footer>
    );
};

export default Footer;