import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
    const code = "</CODE>";
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <p>I am a Fullstack Developer</p>
            <p>Love to make and break {code}</p>
            <p>Want to get in <Link to="/contact">contact</Link></p>
            <Footer />
        </div>
    );
};

export default AboutPage;