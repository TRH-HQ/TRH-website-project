import React, { useState, useEffect, createContext } from 'react';

const Themer = createContext();

function ThemeContext({ children }) {
  const storedTheme = window.localStorage.getItem('prefered-theme');

  const checkTheme = () => {
    if (storedTheme === 'lightTheme') {
      return true;
    }
    return false;
  };

  const [isLight, setIsLight] = useState(checkTheme);

  function setLightTheme() {
    setIsLight(true);
    window.localStorage.setItem('prefered-theme', 'lightTheme');
  }

  function setDarkTheme() {
    setIsLight(false);
    window.localStorage.setItem('prefered-theme', 'darkTheme');
  }

  useEffect(() => {
    const setTheme = () => {
      const root = window.document.documentElement;
      const operatingSystemTheme_dark = window.matchMedia('(prefers-color-scheme: dark)');

      if (storedTheme === 'darkTheme' && operatingSystemTheme_dark.matches) {
        root.classList.add('dark');
      }

      if (storedTheme === 'darkTheme') {
        root.classList.add('dark');
      }

      if (storedTheme === 'lightTheme') {
        root.classList.remove('dark');
      }
    };
    setTheme();

    console.log(`${storedTheme} selected`);
  }, [storedTheme]);
  return (
    <Themer.Provider value={{ isLight, setLightTheme, setDarkTheme }}>{children}</Themer.Provider>
  );
}

export default ThemeContext;
