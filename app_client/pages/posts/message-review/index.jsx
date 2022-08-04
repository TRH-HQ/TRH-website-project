import React from 'react';
// import Image from 'next/image';
import Navbar from '../../../components/layout/Navbar';
import PostIntro from './components/PostIntro';
import PostText from './components/PostText';
import PostAuthorIntro from './components/PostAuthorIntro';
import PageRepeatStack from '../../../components/PageRepeatStack';
import MoreMessages from './components/MoreMessages';
import ReviewItemArea from './components/ReviewItemArea';

function PostPage() {
  return (
    <main className="message-review-post">
      <Navbar />
      <div className="flex gap-8 pt-28">
        <div className="w-9/12 ml-24">
          <PostIntro />
          <PostText />
          <PostAuthorIntro />
        </div>
        <div className="w-3/12 mr-24">
          <ReviewItemArea />
          <MoreMessages />
        </div>
      </div>
      <PageRepeatStack />
    </main>
  );
}

export default PostPage;