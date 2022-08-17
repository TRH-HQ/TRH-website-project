import React from 'react';
import Link from 'next/link';
import ReviewsDropdownMenu from '../../../components/ReviewsDropdownMenu';

function NavLinks({ queryReviewDropdownDisplay, showReviewsDropdown, scrollHeightReached }) {
  return (
    <ul
      className={`${
        !scrollHeightReached && 'text-white'
      } hidden nav-links xl:flex gap-6 items-center montserrat text-base ml-[200px] mr-auto`}
    >
      <Link href="/">
        <a>
          <li className="px-2 nav-link flex">Home</li>
        </a>
      </Link>
      <Link href="/articles">
        <a>
          <li className="px-2 nav-link flex">Articles</li>
        </a>
      </Link>
      <Link href="/recent-series">
        <a>
          <li className="px-2 nav-link flex">Series</li>
        </a>
      </Link>
      <div>
        <div className="relative">
          <li className="px-2 nav-link flex gap-2 items-center">
            <span className="cursor-pointer" onClick={queryReviewDropdownDisplay}>
              Reviews
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </span>
          </li>
          <ReviewsDropdownMenu
            showReviewsDropdown={showReviewsDropdown}
            scrollHeightReached={scrollHeightReached}
          />
        </div>
      </div>
      <Link href="/podcasts">
        <a>
          <li className="px-2 nav-link flex items-center">Podcasts</li>
        </a>
      </Link>
      <Link href="/about-us">
        <a>
          <li className="px-2 nav-link flex items-center">About Us</li>
        </a>
      </Link>
    </ul>
  );
}

export default NavLinks;
