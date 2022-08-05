import React, { useState, useEffect, useContext } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import NavLinks from './NavLinks';
import { SetMainOverlayContext } from '../../contexts/MainOverlayContext';

const DynamicThemeSwitcher = dynamic(() => import('../ThemeSwitcher'), {
  ssr: false
});

function Navbar(isStickyNav) {
  const { showMainOverlay, showContactsMenu } = useContext(SetMainOverlayContext);
  const [showReviewsDropdown, setShowReviewsDropdown] = useState(false);

  function queryReviewDropdownDisplay() {
    if (showReviewsDropdown) {
      setShowReviewsDropdown(false);
    }
    if (!showReviewsDropdown) {
      setShowReviewsDropdown(true);
    }
  }

  return (
    <nav
      className={`${
        isStickyNav && 'fixed top-0 left-0 right-0'
      } main-navbar w-full py-2 px-4 lg:px-8 shadow-md flex custom-background_2 z-30`}
    >
      <aside className="left-side flex items-center mr-auto">
        <button
          className="lg:mr-6 mr-[10px] menu-button custom-nav-btn-colors rounded-full w-[35px] h-[35px] p-[7px] lg:p-[7px] lg:w-[40px] lg:h-[40px] border"
          onClick={showMainOverlay}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="25"
            // height="25"
            fill="currentColor"
            className="bi bi-three-dots-vertical custom-text_primary-stay w-[20px] h-[20px] lg:h-[25px] lg:w-[25px]"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </button>
        <Link href="/">
          <a>
            <div className="brand-details flex items-center custom-text-color_primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // width="28"
                // height="28"
                fill="currentColor"
                className="bi bi-house-door w-[25px] h-[25px]"
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
              </svg>
              <div className="ml-1 text-[25px] lg:text-2xl font-bold montserrat custom-text-color_primary">
                trh<span className="custom-text-color_secondary-stay">.hq</span>{' '}
              </div>
            </div>
          </a>
        </Link>
      </aside>
      <NavLinks
        queryReviewDropdownDisplay={queryReviewDropdownDisplay}
        showReviewsDropdown={showReviewsDropdown}
      />
      <aside className="right-side flex items-center">
        <button className="hidden search-icon custom-text-color_primary mr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-search text-[12px]"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
        <DynamicThemeSwitcher />
        <button
          className="ml-[20px] lg:ml-8 menu-button custom-nav-btn-colors rounded-full p-[8px] w-[34px] h-[34px] border border-gray-500"
          onClick={showContactsMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-envelope-fill custom-text-color_primary-stay"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
          </svg>
        </button>
      </aside>
    </nav>
  );
}

export default Navbar;
