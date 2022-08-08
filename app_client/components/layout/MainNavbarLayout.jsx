import React from 'react';
import Head from 'next/head';
import PageRepeatStack from '../PageRepeatStack';
import Navbar from './Navbar';

function MainNavbarLayout({ children, pageName }) {
  const isStickyNav = true;

  return (
    <>
      <Head>
        <title>Page Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={pageName}>
        <Navbar isStickyNav={isStickyNav} />
        {children}
        <PageRepeatStack />
      </main>
    </>
  );
}

MainNavbarLayout.getLayout = function pageLayout(page) {
  return <>{page}</>;
};

export default MainNavbarLayout;
