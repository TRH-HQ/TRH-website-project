import React from 'react';
// import Image from 'next/image';
// import Navbar from '../../../components/layout/Navbar';
import PostIntro from './components/PostIntro';
import PostText from './components/PostText';
import PostAuthorIntro from './components/PostAuthorIntro';
import MoreMessages from './components/MoreMessages';
import ReviewItemArea from './components/ReviewItemArea';
import MainNavbarLayout from '../../../components/layout/MainNavbarLayout';

function PostPage() {
  return (
    <MainNavbarLayout pageName="message-review">
      <div className="w-full sm:w-4/5 mx-auto pt-16 sm:pt-20 xl:w-full">
        <div className="flex flex-col xl:flex-row lg:justify-between xl:ml-[100px]">
          <div className="w-full xl:w-7/12">
            <PostIntro />
            <PostText />
          </div>
          <div className="w-full xl:w-5/12 xl:ml-auto">
            <ReviewItemArea />
            <MoreMessages />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-4/5 mx-auto xl:w-7/12 xl:ml-[100px]">
        <PostAuthorIntro />
      </div>
    </MainNavbarLayout>
  );
}

export default PostPage;
