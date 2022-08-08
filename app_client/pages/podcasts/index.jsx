import React from 'react';
import CenterSectionHeader from '../../components/CenterSectionHeader';
import MainNavbarLayout from '../../components/layout/MainNavbarLayout';
// import Navbar from '../../components/layout/Navbar';
// import PageRepeatStack from '../../components/PageRepeatStack';
import PodcastCard from '../../components/post-type-cards/PodcastCard';
// import PodcastPageCard from '../../components/PodcastCard';

function PodcastPage() {
  return (
    <MainNavbarLayout pageName="podcasts">
      <section className="pt-32">
        <div className="mx-[60px]">
          <CenterSectionHeader>Podcasts</CenterSectionHeader>
          <div className="grid grid-cols-3 justify-center flex-wrap mt-12 mx-[100px] gap-y-[40px]">
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
          </div>
        </div>
      </section>
    </MainNavbarLayout>
  );
}

export default PodcastPage;
