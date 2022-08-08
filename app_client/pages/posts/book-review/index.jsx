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
      <div className="flex gap-12 pt-28">
        <div className="w-9/12 ml-24">
          <PostIntro />
          <PostText />
          <PostAuthorIntro />
        </div>
        <div className="w-3/12 mr-24">
          <ReviewItemArea />
        </div>
      </div>
    </MainNavbarLayout>
  );
}

export default PostPage;
