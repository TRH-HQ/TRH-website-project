import React from 'react';
import CenterSectionHeader from '../../../components/CenterSectionHeader';
import PodcastCard from '../../../components/post-type-cards/PodcastCard';
import PodcastEpisodes from '../../../components/PodcastEpisodes';
import LoadMoreBtnSection from '../../../components/LoadMoreBtnSection';

function PodcastsSection() {
  return (
    <section className="podcast-section mt-20">
      <CenterSectionHeader>Podcasts</CenterSectionHeader>
      <div className="mx-[60px] my-12 flex justify-center flex-wrap gap-x-[90px]">
        <div>
          <PodcastCard />
          <PodcastEpisodes />
        </div>
        <div>
          <PodcastCard />
          <PodcastEpisodes />
        </div>
        <div>
          <PodcastCard />
          <PodcastEpisodes />
        </div>
      </div>
      <LoadMoreBtnSection link="/podcast-page" />
    </section>
  );
}

export default PodcastsSection;
