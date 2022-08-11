import React from 'react';
import MainNavbarLayout from '../../components/layout/MainNavbarLayout';
// import Navbar from '../../components/layout/Navbar';
// import PageRepeatStack from '../../components/PageRepeatStack';
import PermissionsText from './components/PermissionsText';

function PermissionsPage() {
  return (
    <MainNavbarLayout pageName="permissions">
      <div className="permissions page-header text-4xl sm:text-5xl pt-[100px] montserrat text-center font-bold">
        Permissions
      </div>
      <section className="w-full sm:4/5 lg:w-3/5 mx-auto">
        <PermissionsText />
      </section>
    </MainNavbarLayout>
  );
}

export default PermissionsPage;
