import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
    const code = "</CODE>";
    return (
        <div>
            <h1>About Me</h1>
            <p>I am a Fullstack Developer</p>
            <p>Love to make and break {code}</p>
            <p>Want to get in <Link to="/contact">contact</Link></p>
        </div>
    );
};

export default AboutPage;