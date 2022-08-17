import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PostTag from '../../../components/PostTag';
import DemoPic from '../../../assets/images/shoe-3.jpg';

// import ArticleCard from '../../../components/post-type-cards/ArticleCard';
// import SideSectionHeader from '../../../components/SideSectionHeader';
import LoadMoreBtnSection from '../../../components/LoadMoreBtnSection';

import articlesData from '../../../data/post-details/articles';

function RecentPostsSection() {
  return (
    <section className="min-h-[200px] mt-8 sm:mt-20">
      {/* <SideSectionHeader>Recent Posts</SideSectionHeader> */}
      <div className="recent-posts flex px-[7px] flex-col my-8 xsm:w-4/5 xsm:mx-auto lg:w-full lg:px-10 xl:justify-center lg:flex-row justify-center flex-wrap gap-y-[40px] lg:gap-x-[30px] xl:gap-x-[60px]">
        {articlesData.map((each) => {
          const { tag, banner, title, brief } = each;
          return (
            <Link href="/posts/article" key={each.id}>
              <a className="w-full lg:w-[290px] xl:w-3/12">
                <div className="article-card">
                  <div
                    className="w-full custom-background_card p-4 mx-auto"
                    style={{ boxShadow: '0px 0px 30px #00000038' }}
                  >
                    <div
                      className="post-image-wrapper w-full relative"
                      style={{ boxShadow: '0px 0px 30px #00000038' }}
                    >
                      <PostTag>{tag}</PostTag>
                      <Image alt="post-image" src={DemoPic} layout="responsive" objectFit="cover" />
                    </div>
                    <div className="post-title mt-3 montserrat font-bold text-lg leading-[22px]">
                      {title}
                    </div>
                    <div className="post-brief mt-2 text-[14px]">{brief}</div>
                    <div className="extra-details">
                      <div className="author-section flex mt-4 items-center">
                        <div
                          className="author-pic mr-3 w-[40px] h-[40px] bg-black"
                          style={{ borderRadius: '100%' }}
                        >
                          <Image
                            src={DemoPic}
                            alt="post-author-pic"
                            width={40}
                            height={40}
                            placeholder="blur"
                            style={{ borderRadius: '100%' }}
                          />
                        </div>
                        <div className="text-left flex flex-col py-[5px]">
                          <div className="montserrat">
                            <span className="text-sm font-bold">Scott Hubbard</span>
                          </div>
                          <div className="text-sm custom-text_support">22/July/2022</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
      <LoadMoreBtnSection link="/" />
    </section>
  );
}

export default RecentPostsSection;
