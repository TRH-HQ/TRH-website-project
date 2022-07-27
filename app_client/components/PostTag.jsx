import React from 'react';

function PostTag({ children }) {
  return (
    <div
      className="post-tag pt-[7px] custom-text-color_white text-sm absolute top-[0] right-[0] z-20 py-[3px] px-3 min-w-[60px] text-center"
      style={{ backgroundColor: 'rgba(10, 10, 10 , 0.5)' }}
    >
      <span>{children}</span>
    </div>
  );
}

export default PostTag;
