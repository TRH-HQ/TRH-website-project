import React from 'react';
import Navbar from '../../components/layout/Navbar';
import PageRepeatStack from '../../components/PageRepeatStack';
import CenterSectionHeader from '../../components/CenterSectionHeader';
import BookReviewCard from '../../components/post-type-cards/BookReviewCard';
import LoadMoreBtnSection from '../../components/LoadMoreBtnSection';

function BookReviewsPage() {
  return (
    <main>
      <Navbar />
      <section className="min-h-[200px] mt-28">
        <CenterSectionHeader>Book reviews</CenterSectionHeader>
        <div className="recent-book-reviews mx-[60px] my-12 flex justify-center flex-wrap gap-x-[20px] gap-y-[40px]">
          <BookReviewCard />
          <BookReviewCard />
          <BookReviewCard />
          <BookReviewCard />
          <BookReviewCard />
          <BookReviewCard />
        </div>
        <LoadMoreBtnSection link="/" />
      </section>
      <PageRepeatStack />
    </main>
  );
}

export default BookReviewsPage;
