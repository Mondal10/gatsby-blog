import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const indexPage = () => {
    return (
        <Layout>
            <h1>Hello Devs!</h1>
            <h2>My name is Amit Mondal.</h2>
            <p>Want to get in <Link to="/contact">contact</Link></p>
        </Layout>
    );
};

export default indexPage;