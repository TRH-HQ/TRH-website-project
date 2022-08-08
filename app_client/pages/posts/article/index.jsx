import React from 'react';
import PostIntro from './components/PostIntro';
import PostText from './components/PostText';
import PostAuthorIntro from './components/PostAuthorIntro';
import MainNavbarLayout from '../../../components/layout/MainNavbarLayout';

function PostPage() {
  return (
    <MainNavbarLayout pageName="article">
      <div className="w-3/5 mx-auto pt-28">
        <PostIntro />
        <PostText />
        <PostAuthorIntro />
      </div>
    </MainNavbarLayout>
  );
}

export default PostPage;
