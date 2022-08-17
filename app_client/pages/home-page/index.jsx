import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Hero from './components/Hero';
import NewsLetterSection from '../../components/NewsLetterSection';
import PodcastsSection from './components/PodcastsSection';
import RecentPostsSection from './components/RecentPostsSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from '../../components/layout/Footer';
import SeriesSection from './components/SeriesSection';
import MainOverlay from '../../components/MainOverlay';
// import Navbar from '../../components/layout/Navbar';

function HomePage() {
  const [scrollHeightReached, setScrollHeightReached] = useState(false);

  function handleScroll() {
    if (typeof window !== 'undefined') {
      const scrollHeight = window.scrollY;

      if (scrollHeight > 49) {
        setScrollHeightReached(true);
      } else {
        setScrollHeightReached(false);
      }
      // Client-side-only code
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <Head>
        <title>Page Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="home-page min-h-[200px]">
        <MainOverlay />
        <Hero scrollHeightReached={scrollHeightReached} />
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
