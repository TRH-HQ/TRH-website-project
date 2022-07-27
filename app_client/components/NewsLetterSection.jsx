import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bgPic from '../assets/images/light-house.jpg';

function NewsLetterSection() {
  return (
    <section className="newsletter-section min-h-[400px] w-full relative mt-24">
      <div className="bg-pic-wrapper absolute left-0 right-0 top-0 z-10 w-full min-h-[400px]">
        <Image
          src={bgPic}
          alt="section-background-image"
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
      </div>
      <div
        className="overlay-parent relative z-20 w-full min-h-[400px] py-8 shadow-3xl px-20 flex"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
      >
        <div className="w-1/2">
          <div className="section-intro montserrat text-5xl font-bold mt-12">
            Join Our Newsletter
          </div>
          <form className="form-area w-full flex mt-8">
            <input
              type="text"
              className="w-9/12 px-6 text-xl pt-[16px] pb-[12px]"
              placeholder="add email here"
            />
            <button className="w-3/12 custom-btn-colors_fill custom-text_white text-xl pt-1 font-bold">
              Submit
            </button>
          </form>
          <div className="topics-section w-full">
            <h1 className="mt-12 mb-2 montserrat text-lg font-bold">Topics</h1>
            <div className="topics-list flex gap-x-[15px] flex-wrap uppercase text-sm leading-[22px]">
              <span>Faith</span>
              <span>Relationships</span>
              <span>Personal Identity</span>
              <span>Marriage</span>
              <span>Addictions</span>
              <span>Godly Romance</span>
              <span>Prayer</span>
              <span>Christian discipline</span>
              <span>Discipleship</span>
              <span>Evangelism</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 py-12 ml-20">
          <div className="custom-background w-full  py-2 px-6 flex flex-col h-[100%] justify-between">
            <div>
              <h1 className="text-xl montserrat mb-3">Editor's Pick</h1>
              <span className="text-3xl montserrat font-bold">
                Dating: The silly game we love to play
              </span>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className="text-md montserrat">Article Written By</h1>
                <div className="block text-2xl montserrat font-bold">Gift Omogha</div>
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