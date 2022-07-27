import React from 'react';
// import ThemeContext from '../contexts/ThemeContext';
// import NavbarTypeContext from '../contexts/NavbarTypeContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <main className="custom-background custom-default-text-color nunito-sans">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
