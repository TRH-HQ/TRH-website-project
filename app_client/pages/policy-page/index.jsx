import React from 'react';
import Navbar from '../../components/Navbar';
import PageRepeatStack from '../../components/PageRepeatStack';
import PermissionsText from './components/PolicyText';

function PolicyPage() {
  const isStickyNav = true;

  return (
    <main className="policy-page">
      <Navbar isStickyNav={isStickyNav} />
      <div className="page-header text-5xl pt-[100px] montserrat text-center font-bold">
        Permissions
      </div>
      <div className="w-3/5 mx-auto">
        <PermissionsText />
      </div>
      <PageRepeatStack />
    </main>
  );
}

export default PolicyPage;
