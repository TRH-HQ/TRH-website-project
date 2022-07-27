import React from 'react';
import ReviewCard from './ReviewCard';
import CenterSectionHeader from '../../../components/CenterSectionHeader';
import LoadMoreBtnSection from '../../../components/LoadMoreBtnSection';

function ReviewsSection() {
  return (
    <section className="min-h-[200px] mt-32">
      <CenterSectionHeader>Recent reviews</CenterSectionHeader>
      <div className="recent-reviews mx-[60px] my-12 flex justify-center flex-wrap gap-x-[20px] gap-y-[40px]">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <LoadMoreBtnSection link="/" />
    </section>
  );
}

export default ReviewsSection;
