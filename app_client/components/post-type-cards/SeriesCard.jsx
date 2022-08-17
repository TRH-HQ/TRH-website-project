import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DemoPic from '../../assets/images/shoe-3.jpg';
import PostTag from '../PostTag';

function SeriesCard() {
  return (
    <Link href="/recent-series">
      <a className="series-card w-full px-[12px] py-[20px] sm:px-0 sm:w-3/4 sm:mx-auto lg:w-3/12 xl:w-[300px] lg:mx-0 border-t lg:border-t-0 lg:py-0">
        <div className="w-full mx-auto flex flex-row-reverse lg:flex-col">
          <div className="post-image-wrapper relative w-2/5 lg:w-full">
            <PostTag>Series</PostTag>
            <Image
              src={DemoPic}
              alt="post-image"
              layout="responsive"
              objectFit="cover"
              quality={100}
              placeholder="blur"
            />
          </div>
          <div className="w-3/5 pr-[10px] lg:pr-0 lg:w-full">
            <div className="mt-3 post-title leading-[22px] montserrat font-bold text-[13px] xsm:text-lg">
              Striving for faith in an entertainment age
            </div>
            <div className="extra-details">
              <div className="author-section items-center text-[11px] xsm:text-[12px]">
                Ant Manilla
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default SeriesCard;
