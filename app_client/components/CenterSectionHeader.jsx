import React from 'react';

function CenterSectionHeader({ children }) {
  return (
    <div className="center-section-header text-3xl font-bold montserrat text-center after:rounded-[20px] after:block after:w-[70px] after:h-[5px] after:mx-auto after:custom-background_secondary after:mt-2">
      {children}
    </div>
  );
}

export default CenterSectionHeader;
