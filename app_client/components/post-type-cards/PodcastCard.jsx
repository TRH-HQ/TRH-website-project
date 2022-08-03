import React, { useState } from 'react';
import Image from 'next/image';
import DemoPic from '../../assets/images/shoe-3.jpg';
import SubscribeButtonFill from '../SubscribeButtonFill';
import PodcastSubscriptionMenu from '../PodcastSubscriptionMenu';
import PostTag from '../PostTag';

function PodcastCard() {
  const [showPodcastSubscriptionMenu, setShowPodcastSubscriptionMenu] = useState(false);

  function togglePodcastSubscriptionMenu() {
    setShowPodcastSubscriptionMenu(!showPodcastSubscriptionMenu);
  }

  return (
    <div className="box-content mb-6">
      <div className="w-[250px] custom-background mx-auto">
        <div className="post-image-wrapper w-full relative">
          <PostTag>Podcasts</PostTag>
          <Image alt="post-image" src={DemoPic} layout="responsive" objectFit="cover" />
        </div>
        <div className="podcast-name mt-4 mb-2 montserrat font-bold text-xl leading-[22px]">
          Striving for faith in an entertainment age
        </div>
        <div className="podcast-brief text-[14px] mb-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quae.
        </div>
        <SubscribeButtonFill
          toggleFunction={togglePodcastSubscriptionMenu}
          showSubscribeMenu={showPodcastSubscriptionMenu}
        >
          Subscribe
        </SubscribeButtonFill>
        {showPodcastSubscriptionMenu && <PodcastSubscriptionMenu />}
      </div>
    </div>
  );
}

export default PodcastCard;
