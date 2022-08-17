import React, { createContext } from 'react';

export const navbarType = createContext();

function NavbarTypeContext({ children }) {
  const stickyNav = true;
  const notStickyNav = false;

  return <navbarType.Provider value={{ stickyNav, notStickyNav }}>{children}</navbarType.Provider>;
}

export default NavbarTypeContext;
