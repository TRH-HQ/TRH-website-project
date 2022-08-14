import React from 'react';
// import Link from 'next/link';
// import ReviewCard from './ReviewCard';
import CenterSectionHeader from '../../../components/CenterSectionHeader';
import LoadMoreBtnSection from '../../../components/LoadMoreBtnSection';
// import BookReviewCard from '../../../components/post-type-cards/BookReviewCard';
import MessageReviewCard from '../../../components/post-type-cards/MessageReviewCard';
import ReviewCarousel from './ReviewCarousel';

function ReviewsSection() {
  return (
    <section className="min-h-[200px] mt-12 sm:mt-20">
      <CenterSectionHeader>Recent reviews</CenterSectionHeader>
      <div className="overflow-hidden recent-reviews mt-12 mb-6 md:my-12 flex flex-col justify-center gap-y-[40px]">
        <div className="book-reviews xl:px-28">
          <ReviewCarousel />
        </div>
        <div className="mt-10 message-reviews flex w-full flex-col lg:flex-row justify-center lg:gap-x-[40px]">
          <MessageReviewCard />
          <MessageReviewCard />
          <MessageReviewCard />
        </div>
      </div>
      <LoadMoreBtnSection link="/" />
    </section>
  );
}

export default ReviewsSection;
