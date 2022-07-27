import React, { useState } from 'react';
import Image from 'next/image';
import DemoPic from '../../../assets/images/shoe-3.jpg';
import SubscribeButtonNoFill from '../../../components/SubscribeButtonNoFill';
import PodcastSubscriptionMenu from './PodcastSubscriptionMenu';
import PostTag from '../../../components/PostTag';

function PodcastCard() {
  const [showPodcastSubscriptionMenu, setShowPodcastSubscriptionMenu] = useState(false);

  function togglePodcastSubscriptionMenu() {
    setShowPodcastSubscriptionMenu(!showPodcastSubscriptionMenu);
  }

  return (
    <div className="w-3/12 podcast-card px-8 box-content">
      <div className="w-[250px] custom-background mx-auto">
        <div className="post-image-wrapper w-full relative">
          <PostTag>Podcasts</PostTag>
          <Image alt="post-image" src={DemoPic} layout="responsive" objectFit="cover" />
        </div>
        <div className="podcast-name mt-4 mb-2 montserrat font-bold text-xl leading-[22px]">
          Striving for faith in an entertainment age
        </div>
        <div className="podcast-brief text-[14px] mb-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quae nemo voluptas ab
          tempore.
        </div>
        <SubscribeButtonNoFill
          toggleFunction={togglePodcastSubscriptionMenu}
          showMenu={showPodcastSubscriptionMenu}
        >
          Subscribe
        </SubscribeButtonNoFill>
        {showPodcastSubscriptionMenu && <PodcastSubscriptionMenu />}
        <div className="latest-podcast-episodes-section">
          <h3 className="uppercase montserrat mt-4 mb-2 section-header">latest episodes</h3>
          <div className="episode-item-detail border-t">
            <div className="post-title my-6 montserrat font-bold text-xl leading-[22px]">
              Striving for faith in an entertainment age
            </div>
            <div className="extra-details mt-2 mb-6">
              <div className="author-section flex items-center uppercase">Ant Manilla</div>
            </div>
          </div>
          <div className="episode-item-detail border-t">
            <div className="post-title my-6 montserrat font-bold text-xl leading-[22px]">
              Striving for faith in an entertainment age
            </div>
            <div className="extra-details mt-2 mb-6">
              <div className="author-section flex items-center uppercase">Ant Manilla</div>
            </div>
          </div>
          <div className="episode-item-detail border-t">
            <div className="post-title my-6 montserrat font-bold text-xl leading-[22px]">
              Striving for faith in an entertainment age
            </div>
            <div className="extra-details mt-2 mb-6">
              <div className="author-section flex items-center uppercase">Ant Manilla</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PodcastCard;
