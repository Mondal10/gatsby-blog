import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

// Converts the '-' seperated class to camelCase class automatically 
import { header, title, navList, navItem, activeNavItem } from '../styles/modules/header.module.scss';

const Header = () => {
    const headerData = useStaticQuery(graphql`
       query {
           site {
               siteMetadata {
                   title
               }
           }
       }
    `);

    return (
        <header className={header}>
            <h1>
                <Link className={title} to="/">{headerData.site.siteMetadata.title}</Link>
            </h1>
            <nav>
                <ul className={navList}>
                    {/* activeClassName sets css rule for the active Link(current page) clicked */}
                    <li><Link className={navItem} activeClassName={activeNavItem} to="/">Home</Link></li>
                    <li><Link className={navItem} activeClassName={activeNavItem} to="/blog">Blog</Link></li>
                    <li><Link className={navItem} activeClassName={activeNavItem} to="/about">About</Link></li>
                    <li><Link className={navItem} activeClassName={activeNavItem} to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;