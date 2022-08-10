import React from 'react';
import ArticleCard from '../../../components/post-type-cards/ArticleCard';
import SideSectionHeader from '../../../components/SideSectionHeader';
import LoadMoreBtnSection from '../../../components/LoadMoreBtnSection';

function RecentPostsSection() {
  return (
    <section className="min-h-[200px] mt-4">
      <SideSectionHeader>Recent Posts</SideSectionHeader>
      <div className="recent-posts flex flex-col my-8 xsm:w-4/5 xsm:mx-auto lg:w-full lg:px-12 lg:flex-row justify-center flex-wrap gap-y-[40px] lg:gap-x-[22px] xl:gap-x-[40px]">
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
