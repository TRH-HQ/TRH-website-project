import React from 'react';
import LoadMoreBtnSection from '../../components/LoadMoreBtnSection';
import ArticleCard from '../../components/post-type-cards/ArticleCard';
import Navbar from '../../components/Navbar';
import PageRepeatStack from '../../components/PageRepeatStack';
import CenterSectionHeader from '../../components/CenterSectionHeader';

function index() {
  return (
    <main className="articles-page pt-28">
      <Navbar />
      <section className="min-h-[200px] mt-4">
        <CenterSectionHeader>Recent Articles</CenterSectionHeader>
        <div className="recent-articles mx-[60px] mb-8 mt-12 flex justify-center flex-wrap gap-y-[40px] gap-x-[60px]">
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
      <PageRepeatStack />
    </main>
  );
}

export default index;
