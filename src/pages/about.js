import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import DocumentHead from '../components/DocumentHead';

const AboutPage = () => {
    const code = "</CODE>";

    console.log('%cAmit Mondal', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');

    return (
        <Layout>
            <DocumentHead title="About" />
            <h1>About Me</h1>
            <p>I am a Fullstack Developer</p>
            <p>Love to make and break {code}</p>
            <p>Want to get in <Link to="/contact">contact</Link></p>
        </Layout>
    );
};

export default AboutPage;