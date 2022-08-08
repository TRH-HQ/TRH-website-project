import React from 'react';
import MainNavbarLayout from '../../components/layout/MainNavbarLayout';
// import Navbar from '../../components/layout/Navbar';
// import PageRepeatStack from '../../components/PageRepeatStack';
import PermissionsText from './components/PermissionsText';

function PermissionsPage() {
  return (
    <MainNavbarLayout pageName="permissions">
      <div className="page-header text-5xl pt-[100px] montserrat text-center font-bold">
        Permissions
      </div>
      <section className="w-3/5 mx-auto">
        <PermissionsText />
      </section>
    </MainNavbarLayout>
  );
}

export default PermissionsPage;
