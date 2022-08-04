import React from 'react';
import Navbar from '../../../components/Navbar';
import PostIntro from './components/PostIntro';
import PostText from './components/PostText';
import PostAuthorIntro from './components/PostAuthorIntro';
import PageRepeatStack from '../../../components/PageRepeatStack';

function PostPage() {
  return (
    <main className="article-post">
      <Navbar />
      <div className="w-3/5 mx-auto pt-28">
        <PostIntro />
        <PostText />
        <PostAuthorIntro />
      </div>
      <PageRepeatStack />
    </main>
  );
}

export default PostPage;
