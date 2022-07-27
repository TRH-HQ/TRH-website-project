import React from 'react';
import Navbar from '../../components/Navbar';
import PostIntro from './components/PostIntro';
import PostText from './components/PostText';
import PostAuthorIntro from './components/PostAuthorIntro';
import PageRepeatStack from '../../components/PageRepeatStack';

function PostPage() {
  return (
    <main className="post-page">
      <Navbar />
      <div className="w-3/5 mx-auto">
        <PostIntro />
        <PostText />
        <PostAuthorIntro />
      </div>
      <PageRepeatStack />
    </main>
  );
}

export default PostPage;
