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
      <section className="pt-16 lg:pt-20">
        <div className="min-h-[200px] mt-4">
          <CenterSectionHeader>Recent Articles</CenterSectionHeader>
          <div className="recent-posts flex px-[7px] flex-col my-8 xsm:w-4/5 xsm:mx-auto lg:w-full lg:px-10 xl:justify-center lg:flex-row justify-center flex-wrap gap-y-[40px] lg:gap-x-[30px] xl:gap-x-[60px]">
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
