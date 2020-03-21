import React from 'react';

import Header from './Header';
import Footer from './Footer';

import '../styles/index.scss';
import { container, content } from '../styles/modules/layout.module.scss';

const Layout = (props) => {
    return (
        <div className={container}>
            <div className={content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;