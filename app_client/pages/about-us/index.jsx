import React from 'react';
import MainNavbarLayout from '../../components/layout/MainNavbarLayout';
// import Navbar from '../../components/layout/Navbar';
// import PageRepeatStack from '../../components/PageRepeatStack';
import AboutText from './components/AboutText';
import AboutTop from './components/AboutTop';

function AboutPage() {
  return (
    <MainNavbarLayout pageName="about-page w-full">
      <AboutTop />
      <div className="w-3/5 mx-auto">
        <AboutText />
      </div>
    </MainNavbarLayout>
  );
}

export default AboutPage;
