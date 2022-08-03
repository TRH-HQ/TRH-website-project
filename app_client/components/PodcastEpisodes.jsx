import React from 'react';

function PodcastEpisodes() {
  return (
    <div className="podcast-episodes box-content">
      <div className="w-[250px] custom-background mx-auto">
        <div className="latest-podcast-episodes-section">
          <div className="flex items-center justify-between">
            <h3 className="uppercase montserrat mt-4 mb-2 section-header">latest episodes</h3>
          </div>
          <div className="episode-item-detail border-t">
            <div className="post-title my-6 montserrat font-bold text-xl leading-[22px]">
              Striving for faith in an entertainment age
            </div>
            <div className="extra-details mt-2 mb-6">
              <div className="author-section flex items-center capitalize">Ant Manilla</div>
            </div>
          </div>
          <div className="episode-item-detail border-t">
            <div className="post-title my-6 montserrat font-bold text-xl leading-[22px]">
              Striving for faith in an entertainment age
            </div>
            <div className="extra-details mt-2 mb-6">
              <div className="author-section flex items-center capitalize">Ant Manilla</div>
            </div>
          </div>
          <div className="episode-item-detail border-t">
            <div className="post-title my-6 montserrat font-bold text-xl leading-[22px]">
              Striving for faith in an entertainment age
            </div>
            <div className="extra-details mt-2 mb-6">
              <div className="author-section flex items-center capitalize">Ant Manilla</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PodcastEpisodes;
