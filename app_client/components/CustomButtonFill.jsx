import React from 'react';

function CustomButtonFill({ children }) {
  return (
    <button className="pt-3 pb-2 custom-btn-colors_fill uppercase border-2 w-full mt-4">
      {children}
    </button>
  );
}

export default CustomButtonFill;
