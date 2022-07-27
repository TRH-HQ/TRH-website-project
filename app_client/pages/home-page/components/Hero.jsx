import React from 'react';
import Image from 'next/image';
import leadPostBanner from '../../../assets/images/cake-4.jpg';
// import leadPostAuthorPic from '../assets/images/client-1.jpg';
import HeroNavbar from './HeroNav';

function Hero() {
  return (
    <section className="hero-section h-[600px] w-full relative">
      <div className="lead-post-banner absolute left-0 right-0 top-0 z-10 w-full h-[600px]">
        <Image
          src={leadPostBanner}
          alt="post-author-pic"
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
      </div>
      <div
        className="overlay-parent relative z-20 w-full h-[600px] pt-3 shadow-3xl"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      >
        <HeroNavbar />
        <div className="lead-article-details w-3/4 mx-auto text-center text-white px-8 pt-40">
          <div className="title font-bold text-5xl montserrat">We Need More Holy Fools</div>
          <span className="title-follow-up pt-4 text-2xl block">
            How God Awakened Me to Eternity
          </span>
          <div className="author-section flex justify-center mt-4 items-center">
            <div
              className="author-pic mr-3 w-[50px] h-[50px] bg-white"
              style={{ borderRadius: '100%' }}
            >
              {/* <Image
                src={leadPostAuthorPic}
                // layout="fill"
                objectFit="cover"
                quality={100}
                placeholder="blur"
              /> */}
            </div>
            <div className="text-left flex flex-col">
              <div className="font-bold montserrat mb-1">
                <span className="text-gray-400">Article by</span> <span>Scott Hubbard</span>
              </div>
              <div className="text-sm">22/July/2022</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;