import React from 'react';
import Image from 'next/image';
import DemoPic from '../../assets/images/shoe-3.jpg';
import PostTag from '../PostTag';

function RepostCard() {
  return (
    <div className="w-full md:w-3/12 md:mx-4">
      <div className="w-full custom-background mx-auto">
        <div className="post-image-wrapper w-full relative">
          <PostTag>Article</PostTag>
          <Image alt="post-image" src={DemoPic} layout="responsive" objectFit="cover" />
        </div>
        <div className="post-title mt-3 montserrat font-bold text-lg leading-[22px]">
          Striving for faith in an entertainment age
        </div>
        <div className="extra-details mt-2">
          <div className="author-section flex items-center uppercase">Ant Manilla</div>
        </div>
      </div>
    </div>
  );
}

export default RepostCard;
