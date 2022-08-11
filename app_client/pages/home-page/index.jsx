import React from 'react';
import Head from 'next/head';
import Hero from './components/Hero';
import NewsLetterSection from '../../components/NewsLetterSection';
import PodcastsSection from './components/PodcastsSection';
import RecentPostsSection from './components/RecentPostsSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from '../../components/layout/Footer';
import SeriesSection from './components/SeriesSection';

function HomePage() {
  return (
    <>
      <Head>
        <title>Page Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="home-page min-h-[200px]">
        <Hero />
        <RecentPostsSection />
        <SeriesSection />
        <ReviewsSection />
        <NewsLetterSection />
        <PodcastsSection />
        <Footer />
      </main>
    </>
  );
}

export default HomePage;
