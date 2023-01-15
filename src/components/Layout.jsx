import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, setIsLoggedIn, isLoggedIn, navigate }) => {
    console.log(children, 'child');
    return (
        <>
            {/* Header component */}
            <Header
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
                navigate={navigate}
            />

            {/* Content Section */}
            {children}

            {/*Footer component */}
            <Footer />
        </>
    );
};

export default Layout;
