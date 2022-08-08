import React from 'react';
import Hero from './components/Hero';
import NewsLetterSection from '../../components/NewsLetterSection';
import PodcastsSection from './components/PodcastsSection';
import RecentPostsSection from './components/RecentPostsSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from '../../components/layout/Footer';
import SeriesSection from './components/SeriesSection';

function HomePage() {
  return (
    <main className="home-page min-h-[200px]">
      <Hero />
      <RecentPostsSection />
      <ReviewsSection />
      <NewsLetterSection />
      <PodcastsSection />
      <SeriesSection />
      <Footer />
    </main>
  );
}

export default HomePage;
