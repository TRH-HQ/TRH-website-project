import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DemoPic from '../../../assets/images/shoe-3.jpg';
import PostTag from '../../../components/PostTag';

function SeriesCard() {
  return (
    <Link href="/message-review-card">
      <a className="w-full px-[12px] sm:w-3/4 sm:mx-auto lg:w-3/12 lg:mx-0 border-t lg:border-t-0 lg:py-0 py-[12px]">
        <div className="series-card w-full mx-auto flex flex-row-reverse lg:flex-col">
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
          <div className="w-3/5 pr-[10px] lg:w-full">
            <div className="post-title montserrat font-bold text-[13px] xsm:text-lg">
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
