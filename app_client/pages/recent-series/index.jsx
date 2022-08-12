import React from 'react';
import Navbar from '../../components/layout/Navbar';
import PageRepeatStack from '../../components/PageRepeatStack';
import CenterSectionHeader from '../../components/CenterSectionHeader';
import SeriesCard from '../../components/post-type-cards/SeriesCard';
import LoadMoreBtnSection from '../../components/LoadMoreBtnSection';

function SeriesPage() {
  return (
    <main>
      <Navbar />
      <section className="min-h-[200px] pt-[100px]">
        <CenterSectionHeader>Featured Series</CenterSectionHeader>
        <div className="series-page mb-6 mt-12">
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
      <PageRepeatStack />
    </main>
  );
}

export default SeriesPage;
