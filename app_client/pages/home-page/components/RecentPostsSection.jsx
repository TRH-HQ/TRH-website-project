import React from 'react';
import ArticleCard from '../../../components/post-type-cards/ArticleCard';
import SideSectionHeader from '../../../components/SideSectionHeader';
import LoadMoreBtnSection from '../../../components/LoadMoreBtnSection';

function RecentPostsSection() {
  return (
    <section className="min-h-[200px] mt-4">
      <SideSectionHeader>Recent Posts</SideSectionHeader>
      <div className="recent-posts mx-[60px] my-8 flex justify-center flex-wrap gap-y-[40px] gap-x-[60px]">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
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
