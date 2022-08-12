import React from 'react';
// import Image from 'next/image';
import PostIntro from './components/PostIntro';
import PostText from './components/PostText';
import PostAuthorIntro from './components/PostAuthorIntro';
import ReviewItemArea from './components/ReviewItemArea';
import MainNavbarLayout from '../../../components/layout/MainNavbarLayout';

function PostPage() {
  return (
    <MainNavbarLayout pageName="book-review">
      <div className="w-full sm:w-4/5 mx-auto pt-16 sm:pt-20 lg:w-full">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:ml-12 xl:ml-[100px]">
          <div className="w-full lg:w-8/12">
            <PostIntro />
            <PostText />
          </div>
          <div className="w-full lg:w-4/12">
            <ReviewItemArea />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-8/12 lg:ml-12 xl:ml-[100px]">
        <PostAuthorIntro />
      </div>
    </MainNavbarLayout>
  );
}

export default PostPage;
