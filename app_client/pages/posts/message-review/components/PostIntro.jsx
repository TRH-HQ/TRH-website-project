import React from 'react';
import Image from 'next/image';
import postBanner from '../../../../assets/images/interior-1.jpg';

function PostIntro() {
  return (
    <section className="intro-post-details capitalize mx-auto">
      <div className="flex flex-col">
        <div
          className="content-tags uppercase text-md font-bold mb-3
          after:custom-background_secondary after:w-[50px] after:h-[3px] after:block after:rounded-full custom-text-color_secondary"
        >
          Faith and works
        </div>
        <div className="title font-bold text-5xl montserrat">We Need More Holy Fools</div>
        <div className="more-details pt-4 text-base flex gap-x-12">
          <div>
            <span className="font-bold">Message Review:</span>
            <span> Three most important things - </span>
            <span className="underline">Joshua Selman </span>
          </div>
          <div className="text-base">
            <span className="font-bold">Scripture:</span> <span>Psalm 23: 1-25</span>
          </div>
        </div>
      </div>
      <div className="w-11/12">
        <div className="lead-post-banner mt-8">
          <Image
            src={postBanner}
            alt="post-banner"
            layout="responsive"
            objectFit="cover"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="author-section flex mt-6 items-center">
          <div
            className="author-pic mr-3 w-[50px] h-[50px] bg-white"
            style={{ borderRadius: '100%' }}
          >
            <Image
              src={postBanner}
              layout="responsive"
              alt="post-author-pic"
              objectFit="cover"
              height={50}
              width={50}
              style={{ borderRadius: '100%' }}
              // quality={100}
              placeholder="blur"
            />
          </div>
          <div className="text-left flex flex-col">
            <div className="font-bold montserrat mb-1">
              <span className="custom-text-color_secondary-stay">Reviewed by </span>
              <span>Scott Hubbard</span>
            </div>
            <div className="text-sm">July 22, 2022</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostIntro;
