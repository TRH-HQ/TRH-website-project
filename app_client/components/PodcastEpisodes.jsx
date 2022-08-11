import React from 'react';

function PodcastEpisodes() {
  return (
    <div className="podcast-episodes box-content">
      <div className="w-full lg:w-[250px] xl:w-[300px] custom-background mx-auto">
        <div className="latest-podcast-episodes-section">
          <h3 className="uppercase montserrat mt-4 mb-2 section-header">latest episodes</h3>
          <div className="episode-item-detail border-t">
            <div className="post-title my-6 montserrat font-bold text-xl leading-[22px]">
              Striving for faith in an entertainment age
            </div>
            <div className="extra-details mt-2 mb-6">
              <div className="author-section flex items-center uppercase text-[11px]">
                Ant Manilla | Rufus Markel | Joy Craigesen
              </div>
            </div>
          </div>
          <div className="episode-item-detail border-t">
            <div className="post-title my-6 montserrat font-bold text-xl leading-[22px]">
              Striving for faith in an entertainment age
            </div>
            <div className="extra-details mt-2 mb-6">
              <div className="author-section flex items-center uppercase text-[11px]">
                Rufus Markel | Joy Craigesen
              </div>
            </div>
          </div>
          <div className="episode-item-detail border-t">
            <div className="post-title my-6 montserrat font-bold text-xl leading-[22px]">
              Striving for faith in an entertainment age
            </div>
            <div className="extra-details mt-2 mb-6">
              <div className="author-section flex items-center uppercase text-[11px]">
                Ant Manilla
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PodcastEpisodes;
