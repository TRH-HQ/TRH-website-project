import React from 'react';
import CenterSectionHeader from '../../../components/CenterSectionHeader';
import PodcastCard from '../../../components/post-type-cards/PodcastCard';
import PodcastEpisodes from '../../../components/PodcastEpisodes';
import LoadMoreBtnSection from '../../../components/LoadMoreBtnSection';

function PodcastsSection() {
  return (
    <section className="podcast-section mt-12 xsm:mt-20">
      <CenterSectionHeader>Podcasts</CenterSectionHeader>
      <div className="px-[12px] my-12 flex justify-center flex-col lg:gap-x-[60px] xsm:w-4/5 xsm:mx-auto lg:flex-row">
        <div className="mb-3 w-full">
          <PodcastCard />
          <PodcastEpisodes />
        </div>
        <div className="mb-3 w-full">
          <PodcastCard />
          <PodcastEpisodes />
        </div>
        <div className="mb-3 w-full">
          <PodcastCard />
          <PodcastEpisodes />
        </div>
      </div>
      <LoadMoreBtnSection link="/podcast-page" />
    </section>
  );
}

export default PodcastsSection;
