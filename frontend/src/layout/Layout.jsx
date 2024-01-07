import React from 'react'

import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';
import Routers from '../routes/routers';

const Layout = () => {
    return (
      <>
        <Header />
        <main>
          <Routers />
        </main>
        <Footer /> 
      </>
    );
};

export default Layout

