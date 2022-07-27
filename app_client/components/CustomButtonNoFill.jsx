import React from 'react';

function CustomButtonNoFill({ children }) {
  return (
    <button className="custom-btn-colors_no-fill uppercase border-2 w-full mt-4">{children}</button>
  );
}

export default CustomButtonNoFill;
