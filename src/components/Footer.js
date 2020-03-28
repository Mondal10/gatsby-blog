import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { footer } from '../styles/modules/footer.module.scss';

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
        <footer className={footer}>
            <p>Created by {footerData.site.siteMetadata.author}, © 2020</p>
        </footer>
    );
};

export default Footer;