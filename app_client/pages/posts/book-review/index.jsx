import React from 'react';
import Image from 'next/image';
import Navbar from '../../../components/layout/Navbar';
import PostIntro from './components/PostIntro';
import PostText from './components/PostText';
import PostAuthorIntro from './components/PostAuthorIntro';
import PageRepeatStack from '../../../components/PageRepeatStack';
import ReviewItemArea from './components/ReviewItemArea';

function PostPage() {
  return (
    <main className="book-review-post">
      <Navbar />
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
      <PageRepeatStack />
    </main>
  );
}

export default PostPage;
