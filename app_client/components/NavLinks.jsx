import React from 'react';
import Link from 'next/link';

function NavLinks({ isHeroNav }) {
  return (
    <ul
      className={`${
        isHeroNav && 'text-white'
      } nav-links flex gap-6 items-center montserrat text-base ml-[200px] mr-auto`}
    >
      <Link href="/">
        <a>
          <li className="px-2 nav-link flex itemss-center">Home</li>
        </a>
      </Link>
      <Link href="/">
        <a>
          <li className="px-2 nav-link flex itemss-center">Articles</li>
        </a>
      </Link>
      <Link href="/">
        <a>
          <li className="px-2 nav-link flex itemss-center">Series</li>
        </a>
      </Link>
      <Link href="/">
        <a>
          <li className="px-2 nav-link flex itemss-center">Reviews</li>
        </a>
      </Link>
      <Link href="/">
        <a>
          <li className="px-2 nav-link flex itemss-center">Podcasts</li>
        </a>
      </Link>
      <Link href="/about-us">
        <a>
          <li className="px-2 nav-link flex itemss-center">About Us</li>
        </a>
      </Link>
    </ul>
  );
}

export default NavLinks;
