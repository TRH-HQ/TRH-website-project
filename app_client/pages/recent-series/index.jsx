import React from 'react';
import Navbar from '../../components/Navbar';
import PageRepeatStack from '../../components/PageRepeatStack';
import CenterSectionHeader from '../../components/CenterSectionHeader';
import SeriesCard from '../../components/SeriesCard';
import LoadMoreBtnSection from '../../components/LoadMoreBtnSection';

function SeriesPage() {
  return (
    <main>
      <Navbar />
      <section className="min-h-[200px] mt-28">
        <CenterSectionHeader>Recent Series</CenterSectionHeader>
        <div className="recent-series mx-[60px] my-12 flex justify-center flex-wrap gap-x-[20px] gap-y-[40px]">
          <SeriesCard />
          <SeriesCard />
          <SeriesCard />
          <SeriesCard />
          <SeriesCard />
          <SeriesCard />
        </div>
        <LoadMoreBtnSection link="/" />
      </section>
      <PageRepeatStack />
    </main>
  );
}

export default SeriesPage;
