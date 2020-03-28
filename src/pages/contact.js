import React from 'react';

import Layout from '../components/Layout';
import DocumentHead from '../components/DocumentHead';

const ContactPage = () => {
    return (
        <Layout>
            <DocumentHead title="Contact" />
            <h1>Contact details</h1>
            <ul>
                <li>Email: fakeid@gmail.com</li>
                <li>Number: 9999999999</li>
                <li>Twitter: <a href="https://twitter.com/a_myth_10" target="_blank" rel="noopener noreferrer">Amit Mondal</a></li>
            </ul>
        </Layout>
    );
};

export default ContactPage;