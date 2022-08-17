import React from 'react';
// import Navbar from '../../components/layout/Navbar';
// import PageRepeatStack from '../../components/PageRepeatStack';
import CenterSectionHeader from '../../components/CenterSectionHeader';
import MessageReviewCard from '../../components/post-type-cards/MessageReviewCard';
import LoadMoreBtnSection from '../../components/LoadMoreBtnSection';
import MainNavbarLayout from '../../components/layout/MainNavbarLayout';

function MessageReviewsPage() {
  return (
    <MainNavbarLayout pageName="message-reviews">
      <section className="min-h-[200px] pt-20 sm:pt-[100px]">
        <CenterSectionHeader>Message reviews</CenterSectionHeader>
        <div className="recent-message-reviews flex px-[7px] flex-col my-8 xsm:w-4/5 xsm:mx-auto lg:w-full lg:px-10 xl:justify-center lg:flex-row justify-center flex-wrap lg:gap-x-[30px] lg:gap-y-[40px] xl:gap-x-[60px]">
          <MessageReviewCard />
          <MessageReviewCard />
          <MessageReviewCard />
          <MessageReviewCard />
          <MessageReviewCard />
          <MessageReviewCard />
          <MessageReviewCard />
        </div>
        <LoadMoreBtnSection link="/" />
      </section>
    </MainNavbarLayout>
  );
}

export default MessageReviewsPage;
