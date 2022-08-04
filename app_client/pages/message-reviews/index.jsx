import React from 'react';
import Navbar from '../../components/layout/Navbar';
import PageRepeatStack from '../../components/PageRepeatStack';
import CenterSectionHeader from '../../components/CenterSectionHeader';
import MessageReviewCard from '../../components/post-type-cards/MessageReviewCard';
import LoadMoreBtnSection from '../../components/LoadMoreBtnSection';

function MessageReviewsPage() {
  return (
    <main>
      <Navbar />
      <section className="min-h-[200px] mt-28">
        <CenterSectionHeader>Message reviews</CenterSectionHeader>
        <div className="recent-message-reviews mx-[60px] my-12 flex justify-center flex-wrap gap-x-[20px] gap-y-[40px]">
          <MessageReviewCard />
          <MessageReviewCard />
          <MessageReviewCard />
          <MessageReviewCard />
          <MessageReviewCard />
          <MessageReviewCard />
        </div>
        <LoadMoreBtnSection link="/" />
      </section>
      <PageRepeatStack />
    </main>
  );
}

export default MessageReviewsPage;
