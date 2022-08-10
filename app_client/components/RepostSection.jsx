import React from 'react';
import RepostCard from './post-type-cards/RepostCard';
// import CenterSectionHeader from './CenterSectionHeader';
// import LoadMoreBtnSection from './LoadMoreBtnSection';

function ReviewsSection() {
  return (
    <section className="min-h-[200px] mt-12 lg:mt-20 lg:mb-14">
      <div className="recent-reviews mx-[12px] xsm:w-4/5 xsm:mx-auto md:flex-row md:w-full my-12 flex flex-col justify-center flex-wrap gap-x-[20px] xl:gap-x-[40px]">
        <RepostCard />
        <RepostCard />
        <RepostCard />
      </div>
    </section>
  );
}

export default ReviewsSection;
