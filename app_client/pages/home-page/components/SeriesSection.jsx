import React from 'react';
import CenterSectionHeader from '../../../components/CenterSectionHeader';
import LoadMoreBtnSection from '../../../components/LoadMoreBtnSection';
import SeriesCard from './SeriesCard';
// import SideSectionHeader from './SideSectionHeader';

function SeriesSection() {
  return (
    <section className="min-h-[200px] pt-12 pb-8 hidden">
      <CenterSectionHeader>Featured series</CenterSectionHeader>{' '}
      <div className="series mx-[60px] my-12 flex justify-center flex-wrap gap-y-[40px]">
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
      </div>
      <LoadMoreBtnSection link="/" />
    </section>
  );
}

export default SeriesSection;
