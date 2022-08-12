import React from 'react';
import CenterSectionHeader from '../../components/CenterSectionHeader';
import MainNavbarLayout from '../../components/layout/MainNavbarLayout';
// import Navbar from '../../components/layout/Navbar';
// import PageRepeatStack from '../../components/PageRepeatStack';
import PodcastCard from '../../components/post-type-cards/PodcastCard';
import PodcastEpisodes from '../../components/PodcastEpisodes';
// import PodcastPageCard from '../../components/PodcastCard';

function PodcastPage() {
  return (
    <MainNavbarLayout pageName="podcasts">
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
      </section>
    </MainNavbarLayout>
  );
}

export default PodcastPage;
