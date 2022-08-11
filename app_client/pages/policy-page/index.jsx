import React from 'react';
import MainNavbarLayout from '../../components/layout/MainNavbarLayout';
// import Navbar from '../../components/layout/Navbar';
// import PageRepeatStack from '../../components/PageRepeatStack';
import PolicyText from './components/PolicyText';

function PolicyPage() {
  return (
    <MainNavbarLayout pageName="policy">
      <div className="page-header text-4xl mb-2 sm:text-5xl pt-[70px] lg:pt-[100px] montserrat text-center font-bold">
        Privacy Policy
      </div>
      <section className="w-full sm:w-4/5 lg:w-3/5 mx-auto">
        <PolicyText />
      </section>
    </MainNavbarLayout>
  );
}

export default PolicyPage;
