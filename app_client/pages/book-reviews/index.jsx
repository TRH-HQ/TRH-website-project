import React from 'react';
// import Navbar from '../../components/layout/Navbar';
// import PageRepeatStack from '../../components/PageRepeatStack';
import CenterSectionHeader from '../../components/CenterSectionHeader';
import BookReviewCard from '../../components/post-type-cards/BookReviewCard';
import LoadMoreBtnSection from '../../components/LoadMoreBtnSection';
import MainNavbarLayout from '../../components/layout/MainNavbarLayout';

function BookReviewsPage() {
  return (
    <MainNavbarLayout pageName="book-reviews">
      <section className="min-h-[200px] pt-20 sm:pt-[100px]">
        <CenterSectionHeader>Book reviews</CenterSectionHeader>
        <div className="recent-book-reviews my-12 flex justify-center flex-wrap xl:gap-x-[20px] gap-y-[40px]">
          <BookReviewCard />
          <BookReviewCard />
          <BookReviewCard />
          <BookReviewCard />
        </div>
        <LoadMoreBtnSection link="/" />
      </section>
    </MainNavbarLayout>
  );
}

export default BookReviewsPage;
