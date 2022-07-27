import React from 'react';
import Hero from './components/Hero';
// import Navbar from '../../components/Navbar';
import NewsLetterSection from '../../components/NewsLetterSection';
import PodcastsSection from './components/PodcastsSection';
import RecentPostsSection from './components/RecentPostsSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from '../../components/Footer';
import SeriesSection from './components/SeriesSection';

function HomePage() {
  return (
    <main className="min-h-[200px]">
      {/* <Navbar /> */}
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
