import React from 'react';
import Image from 'next/image';
import postBanner from '../../../../assets/images/interior-1.jpg';

function PostIntro() {
  return (
    <section className="intro-post-details">
      <div className="flex flex-col p-[12px] xsm:px-[20px] sm:text-center xl:text-left xl:px-0">
        <div
          className="content-tags uppercase text-md font-bold mb-2 sm:mb-3 
          after:custom-background_3 after:w-[50px] after:h-[3px] after:block after:rounded-full 
          sm:after:mx-auto xl:after:mx-0 custom-text-color_secondary"
        >
          Faith and works
        </div>
        <div className="title font-bold title text-2xl sm:text-4xl lg:text-5xl montserrat">
          We Need More Holy Fools
        </div>
        <div className="more-details sm:pt-4 flex flex-col gap-x-12">
          <div className="text-base xsm:text-xl lg:text-2xl;">
            <span className="font-bold">Message Review:</span>
            <span> Three most important things - </span>
            <span className="underline">Joshua Selman </span>
          </div>
          <div className="text-base">
            <span className="font-bold">Scripture:</span> <span>Psalm 23: 1-25</span>
          </div>
        </div>
      </div>
      <div>
        <div className="lead-post-banner mt-2 sm:mt-8">
          <Image
            src={postBanner}
            alt="post-banner"
            layout="responsive"
            objectFit="cover"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div
          className="author-section flex mt-4 sm:mt-6 items-center w-full px-[12px] sm:p-0 
        xl:w-11/12 mx-auto"
        >
          <div className="author-pic mr-3 w-[50px] h-[50px]">
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
            <div className="font-bold montserrat mb-1 text-[14px]">
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
