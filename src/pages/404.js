import React from 'react';

import Layout from '../components/Layout';
import DocumentHead from '../components/DocumentHead';

const NotFound = () => {
    return (
        <div>
            <Layout>
                <DocumentHead title="404" />
                <h1>No such page found</h1>
            </Layout>
        </div>
    );
}

export default NotFound;