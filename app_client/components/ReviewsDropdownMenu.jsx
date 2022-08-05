import React from 'react';
import Link from 'next/link';

function ReviewsDropdownMenu({ showReviewsDropdown, isHeroNav }) {
  return (
    <div
      className={`${showReviewsDropdown ? 'flex' : 'hidden'} flex-col gap-y-2 ${
        isHeroNav && 'custom-default-text-color'
      } absolute py-4 px-4 top-[60px] left-[-100px] right-0 custom-background_card w-[500px] z-50 shadow rounded-[5px]`}
    >
      <div>
        <Link href="/book-reviews">Book Review</Link>
      </div>
      <div>
        <Link href="/message-reviews">Messages</Link>
      </div>
    </div>
  );
}

export default ReviewsDropdownMenu;
