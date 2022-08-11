import React from 'react';
import Image from 'next/image';
import postBanner from '../../../../assets/images/interior-1.jpg';

function PostIntro() {
  return (
    <section className="intro-post-details">
      <div className="flex flex-col p-[12px] sm:text-center">
        <div
          className="content-tags uppercase text-md font-bold mb-2 sm:mb-6 
          after:custom-background_3 after:w-[50px] after:h-[3px] after:block after:rounded-full sm:after:mx-auto custom-text-color_secondary"
        >
          Faith and works
        </div>
        <div className="title font-bold text-2xl sm:text-4xl lg:text-5xl montserrat">
          We Need More Holy Fools
        </div>
        <span className="title-follow-up sm:pt-4 text-lg xsm:text-xl lg:text-2xl block capitalize">
          How God Awakened Me to Eternity
        </span>
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
        <div className="author-section flex mt-4 sm:mt-6 items-center w-full px-[12px] xsm:px-0 sm:w-11/12 mx-auto">
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
            <div className="font-bold montserrat mb-1 text-[14px]">
              <span className="custom-text-color_secondary-stay">Article by </span>
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
