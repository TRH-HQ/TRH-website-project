import React from 'react';
import CenterSectionHeader from '../../../components/CenterSectionHeader';
import PodcastCard from './PodcastCard';
import LoadMoreBtnSection from '../../../components/LoadMoreBtnSection';

function PodcastsSection() {
  return (
    <section className="podcast-section mt-20">
      <CenterSectionHeader>Podcasts</CenterSectionHeader>
      <div className="recent-reviews mx-[60px] my-12 flex justify-center flex-wrap gap-y-[40px]">
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
      </div>
      <LoadMoreBtnSection link="/" />
    </section>
  );
}

export default PodcastsSection;
