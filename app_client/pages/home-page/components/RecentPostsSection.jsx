import React from 'react';
import ArticleCard from '../../../components/post-type-cards/ArticleCard';
import SideSectionHeader from '../../../components/SideSectionHeader';
import LoadMoreBtnSection from '../../../components/LoadMoreBtnSection';

function RecentPostsSection() {
  return (
    <section className="min-h-[200px] mt-8 sm:mt-20">
      {/* <SideSectionHeader>Recent Posts</SideSectionHeader> */}
      <div className="recent-posts flex px-[7px] flex-col my-8 xsm:w-4/5 xsm:mx-auto lg:w-full lg:px-10 xl:justify-center lg:flex-row justify-center flex-wrap gap-y-[40px] lg:gap-x-[30px] xl:gap-x-[60px]">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <LoadMoreBtnSection link="/" />
    </section>
  );
}

export default RecentPostsSection;
