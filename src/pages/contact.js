import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact details</h1>
            <ul>
                <li>Email: fakeid@gmail.com</li>
                <li>Number: 9999999999</li>
                <li>Twitter: <a href="https://twitter.com/a_myth_10" target="_blank" rel="noopener noreferrer">Amit Mondal</a></li>
            </ul>
            <Footer />
        </div>
    );
};

export default ContactPage;