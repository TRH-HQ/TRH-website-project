import React from 'react';
import CenterSectionHeader from '../components/CenterSectionHeader';
import LoadMoreSection from './LoadMoreSection';

function CustomPostTypeSection({ sectionName, sectionPage, children }) {
  return (
    <section className="min-h-[200px] mt-32">
      <CenterSectionHeader>Recent reviews</CenterSectionHeader>
      <div
        className={`${sectionName} mx-[60px] my-12 flex justify-center flex-wrap gap-x-[20px] gap-y-[40px]`}
      >
        {children}
      </div>
      <LoadMoreSection link={`${sectionPage}`} />
    </section>
  );
}

export default CustomPostTypeSection;
