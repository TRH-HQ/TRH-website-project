import React from 'react';

function SideSectionHeader({ children }) {
  return (
    <div className="section-header custom-border-color_primary border-l-[5px] py-4">
      <h1 className="ml-[10rem] text-xl montserrat font-bold">{children}</h1>
    </div>
  );
}

export default SideSectionHeader;