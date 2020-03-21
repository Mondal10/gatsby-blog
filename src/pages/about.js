import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const AboutPage = () => {
    const code = "</CODE>";
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I am a Fullstack Developer</p>
            <p>Love to make and break {code}</p>
            <p>Want to get in <Link to="/contact">contact</Link></p>
        </Layout>
    );
};

export default AboutPage;