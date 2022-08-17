import React from 'react';
import Link from 'next/link';

function ReviewsDropdownMenu({ showReviewsDropdown, scrollHeightReached }) {
  return (
    <div
      className={`${showReviewsDropdown ? 'flex' : 'hidden'} flex-col gap-y-2 ${
        !scrollHeightReached && 'custom-default-text-color'
      } absolute py-4 px-4 top-[45px] left-[-100px] right-0 custom-background_card w-[500px] z-50 shadow rounded-[5px]`}
    >
      <div className="cursor-pointer">
        <Link href="/book-reviews">Book Review</Link>
      </div>
      <div className="cursor-pointer">
        <Link href="/message-reviews">Messages</Link>
      </div>
    </div>
  );
}

export default ReviewsDropdownMenu;
