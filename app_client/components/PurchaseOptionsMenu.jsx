import React from 'react';
import Link from 'next/link';

function PurchaseOptionsMenu() {
  return (
    <div className="podcast-subscription-menu w-full fade-in relative z-20">
      <ul className="flex flex-col absolute top-0 left-0 right-0 custom-background_secondary">
        <a href="#">
          <li className="flex w-3/4 mx-auto justify-center items-center gap-x-3 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-credit-card-2-back-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z" />
            </svg>
            <span>Amazon</span>
          </li>
        </a>
      </ul>
    </div>
  );
}

export default PurchaseOptionsMenu;
