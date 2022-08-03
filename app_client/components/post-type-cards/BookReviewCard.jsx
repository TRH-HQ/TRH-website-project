import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PostTag from '../PostTag';
import DemoPic from '../../assets/images/shoe-3.jpg';

function BookReviewCard() {
  return (
    <Link href="/book-review-post">
      <a>
        <div className="book-review-card">
          <div className="w-[200px] custom-background mx-auto">
            <div className="post-image-wrapper w-full relative">
              <PostTag>Review</PostTag>
              <Image alt="post-image" src={DemoPic} height={300} width={200} />
            </div>
            <div className="post-title mt-3 montserrat font-bold text-base leading-[22px] text-center">
              Striving for faith in an entertainment age
            </div>
            <div className="extra-details">
              <div className="author-section items-center text-center text-[14px]">
                Reviewed by: Ant Manilla
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default BookReviewCard;
