import React from 'react';
import CenterSectionHeader from '../../../components/CenterSectionHeader';
import LoadMoreBtnSection from '../../../components/LoadMoreBtnSection';
import SeriesCard from '../../../components/post-type-cards/SeriesCard';
// import SideSectionHeader from './SideSectionHeader';

function SeriesSection() {
  return (
    <section className="min-h-[200px] mt-12">
      <CenterSectionHeader>Featured Series</CenterSectionHeader>
      <div className="featured-series mb-6 mt-12">
        <div className="series-cards-wrapper flex-wrap flex w-full flex-col lg:flex-row justify-center lg:gap-x-[50px] lg:gap-y-[40px] xl:px-[50px]">
          <SeriesCard />
          <SeriesCard />
          <SeriesCard />
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
