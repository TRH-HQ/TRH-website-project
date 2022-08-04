import React from 'react';
import RepostCard from './post-type-cards/RepostCard';
// import CenterSectionHeader from './CenterSectionHeader';
// import LoadMoreBtnSection from './LoadMoreBtnSection';

function ReviewsSection() {
  return (
    <section className="min-h-[200px] mt-40 mb-28">
      <div className="recent-reviews mx-[60px] my-12 flex justify-center flex-wrap gap-x-[20px] gap-y-[40px]">
        <RepostCard />
        <RepostCard />
        <RepostCard />
      </div>
    </section>
  );
}

export default ReviewsSection;
