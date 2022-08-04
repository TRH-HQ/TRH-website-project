import React from 'react';
import CenterSectionHeader from '../../components/CenterSectionHeader';
import Navbar from '../../components/layout/Navbar';
import PageRepeatStack from '../../components/PageRepeatStack';
import PodcastCard from '../../components/post-type-cards/PodcastCard';
// import PodcastPageCard from '../../components/PodcastCard';

function PodcastPage() {
  const isStickyNav = true;

  return (
    <main className="pt-32">
      <Navbar isStickyNav={isStickyNav} />
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
      <PageRepeatStack />
    </main>
  );
}

export default PodcastPage;
