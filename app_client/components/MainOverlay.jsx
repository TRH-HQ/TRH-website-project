import React, { useContext, useState } from 'react';
import { SetMainOverlayContext } from '../contexts/MainOverlayContext';
import MainOverlayContactsMenu from './MainOverlayContactsMenu';
import MainOverlayMainMenu from './MainOverlayMainMenu';

function MainOverlay() {
  const { mainOverlayOn, hideMainOverlay, contactsMenuOn } = useContext(SetMainOverlayContext);

  return (
    <section
      className={`${
        mainOverlayOn ? 'block' : 'hidden'
      } fixed top-0 left-0 right-0 w-full min-h-screen p-[3rem] fade-in`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)', zIndex: '100', color: 'white' }}
    >
      <div className="absolute top-[3rem] right-[3rem]">
        <div className="close-button cursor-pointer" onClick={hideMainOverlay}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </div>
      </div>
      {contactsMenuOn ? <MainOverlayContactsMenu /> : <MainOverlayMainMenu />}
    </section>
  );
}

export default MainOverlay;
