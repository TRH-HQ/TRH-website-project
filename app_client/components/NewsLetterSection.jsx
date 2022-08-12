import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bgPic from '../assets/images/light-house.jpg';

function NewsLetterSection() {
  return (
    <section className="newsletter-section min-h-[400px] w-full relative mt-12 md:mt-16 bg-gray-500">
      <div className="hidden lg:inline-block absolute bg-pic-wrapper left-0 right-0 top-0 z-10 w-full min-h-[400px]">
        <Image
          src={bgPic}
          alt="section-background-image"
          layout="fill"
          // objectFit="cover"
          // quality={100}
          placeholder="blur"
        />
      </div>
      <div
        className="overlay-parent custom-newsletter-section-background relative z-20 
      w-full min-h-[400px] py-8 shadow-3xl px-[12px] sm:px-6 lg:px-8 xl:pl-12 flex flex-col lg:flex-row"
      >
        <div className="w-full lg:w-1/2 md:w-9/12 md:mx-auto">
          <div className="text-center">
            <h1 className="section-intro montserrat text-4xl lg:text-5xl font-bold mt-[2rem] lg:mt-[4.5rem] mb-3">
              Join Our Newsletter
            </h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi possimus
              consequuntur, autem dicta unde!
            </span>
          </div>
          <form className="form-area w-full flex mt-8">
            <input
              type="text"
              className="w-9/12 px-6 text-xl py-[10px] lg:pt-[16px] lg:pb-[12px]"
              placeholder="add email here"
            />
            <button className="w-3/12 custom-btn-colors_fill-primary-stay custom-text_white text-[16px] sm:text-xl font-bold">
              Submit
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 py-12 lg:ml-[4rem] md:w-9/12 md:mx-auto">
          <div className="w-full border-t lg:border-t-0 lg:border-l custom-border-color_2 py-2 lg:pl-[4rem] pr-6 flex flex-col gap-y-10">
            <div>
              <h1 className="text-xl montserrat mb-3 mt-6">Editor's Pick</h1>
              <span className="text-2xl sm:text-3xl montserrat font-bold">
                Dating: The silly game we love to play
              </span>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className="text-md montserrat">Article Written By</h1>
                <div className="block  text-lg sm:text-2xl montserrat font-bold">Gift Omogha</div>
              </div>
              <div className="custom-support-text underline flex flex-col-reverse">
                <Link href="/">
                  <a>Read now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetterSection;
