import React from 'react';
import NewsLetterSection from './NewsLetterSection';
import RepostSection from './RepostSection';
import Footer from './layout/Footer';

function PageRepeatStack() {
  return (
    <section>
      <NewsLetterSection />
      <RepostSection />
      <Footer />
    </section>
  );
}

export default PageRepeatStack;
