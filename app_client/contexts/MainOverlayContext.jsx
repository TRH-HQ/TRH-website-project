import React, { createContext, useState } from 'react';

export const SetMainOverlayContext = createContext();

function MainOverlayContext({ children }) {
  const [mainOverlayOn, setMainOverlayOn] = useState(false);
  const [contactsMenuOn, setContactsMenuOn] = useState(false);

  function hideMainOverlay() {
    setMainOverlayOn(false);
    setContactsMenuOn(false);
  }

  function showMainOverlay() {
    setMainOverlayOn(true);
  }

  function showContactsMenu() {
    setMainOverlayOn(true);
    setContactsMenuOn(true);
  }

  return (
    <SetMainOverlayContext.Provider
      value={{ hideMainOverlay, showMainOverlay, mainOverlayOn, contactsMenuOn, showContactsMenu }}
    >
      {children}
    </SetMainOverlayContext.Provider>
  );
}

export default MainOverlayContext;
