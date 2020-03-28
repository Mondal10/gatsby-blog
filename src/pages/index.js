import React from 'react';

import Layout from '../components/Layout';
import DocumentHead from '../components/DocumentHead';

const indexPage = () => {
    return (
        <Layout>
            <DocumentHead title="Home" />
            <h1>Hello Devs!</h1>
            <h2>My name is Amit Mondal.</h2>
            <p>I am a Fullstack developer living in Incredible India <span role="img" aria-label="sparkling-heart">💖</span></p>
            <p>Trying to learn the working Gatsby</p>
        </Layout>
    );
};

export default indexPage;