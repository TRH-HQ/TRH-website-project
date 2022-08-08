import React from 'react';
import LoadMoreBtnSection from '../../components/LoadMoreBtnSection';
import ArticleCard from '../../components/post-type-cards/ArticleCard';
// import Navbar from '../../components/layout/Navbar';
// import PageRepeatStack from '../../components/PageRepeatStack';
import CenterSectionHeader from '../../components/CenterSectionHeader';
import MainNavbarLayout from '../../components/layout/MainNavbarLayout';

function index() {
  return (
    <MainNavbarLayout pageName="articles">
      <section className="pt-28">
        <div className="min-h-[200px] mt-4">
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
        </div>
      </section>
    </MainNavbarLayout>
  );
}

export default index;
