import React from 'react';
import CenterSectionHeader from '../../../components/CenterSectionHeader';
import LoadMoreBtnSection from '../../../components/LoadMoreBtnSection';
import SeriesCard from './SeriesCard';
// import SideSectionHeader from './SideSectionHeader';

function SeriesSection() {
  return (
    <section className="min-h-[200px] mt-12 sm:mt-20">
      <CenterSectionHeader>Featured Series</CenterSectionHeader>
      <div className="featured-series mt-12 mb-6 md:my-12 flex flex-col justify-center gap-y-[40px]">
        <div className="message-reviews flex w-full flex-col lg:flex-row justify-center lg:gap-x-[40px]">
          <SeriesCard />
          <SeriesCard />
          <SeriesCard />
        </div>
      </div>
      <LoadMoreBtnSection link="/" />
    </section>
  );
}

export default SeriesSection;
