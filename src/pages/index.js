import React from 'react';
import { Link } from 'gatsby';

const indexPage = () => {
    return (
        <div>
            <h1>Hello Devs!</h1>
            <h2>My name is Amit Mondal.</h2>
            <p>Want to get in <Link to="/contact">contact</Link></p>
        </div>
    );
};

export default indexPage;