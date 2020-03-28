import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import DocumentHead from '../components/DocumentHead';

const indexPage = () => {
    return (
        <Layout>
            <DocumentHead title="Home" />
            <h1>Hello Devs!</h1>
            <h2>My name is Amit Mondal.</h2>
            <p>I am a Fullstack developer living in Incredible India <span role="img" aria-label="sparkling-heart">💖</span></p>
            <p>Want to get in <Link to="/contact">contact</Link></p>
        </Layout>
    );
};

export default indexPage;