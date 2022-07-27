import React from 'react';
import Navbar from '../../components/Navbar';
import PageRepeatStack from '../../components/PageRepeatStack';
import AboutText from './components/AboutText';
import AboutTop from './components/AboutTop';

function AboutPage() {
  const isStickyNav = true;

  return (
    <main className="about-page">
      <Navbar isStickyNav={isStickyNav} />
      <AboutTop />
      <div className="w-3/5 mx-auto">
        <AboutText />
      </div>
      <PageRepeatStack />
    </main>
  );
}

export default AboutPage;
