import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';

const indexPage = () => {
    return (
        <div>
            <Header />
            <h1>Hello Devs!</h1>
            <h2>My name is Amit Mondal.</h2>
            <p>Want to get in <Link to="/contact">contact</Link></p>
            <Footer />
        </div>
    );
};

export default indexPage;