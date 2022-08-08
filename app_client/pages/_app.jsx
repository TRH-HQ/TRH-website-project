import React from 'react';
import MainOverlay from '../components/MainOverlay';
// import ThemeContext from '../contexts/ThemeContext';
// import NavbarTypeContext from '../contexts/NavbarTypeContext';
import '../styles/globals.css';
import MainOverlayContext from '../contexts/MainOverlayContext';

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <MainOverlayContext>
      <main className="custom-background_1 custom-default-text-color nunito-sans relative w-full">
        <MainOverlay />
        <Component {...pageProps} />
      </main>
    </MainOverlayContext>
  );
}

export default MyApp;
