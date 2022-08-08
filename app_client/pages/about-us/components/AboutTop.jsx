import React from 'react';

function AboutTop() {
  return (
    <section>
      <div className="about-top min-h-[400px] p-4 custom-background_black mt-50px pt-[100px] pb-[50px] mb-100px w-full">
        <div className="video-area">
          <div className="w-full h-[230px] xsm:w-4/5 xsm:h-[250px] sm:w-[450px] sm:h-[300px] bg-slate-500 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum corporis
            recusandae vero officiis sit quo consequatur provident minima molestias?
          </div>
        </div>
      </div>
      <div className="mx-auto w-full md:w-4/5 lg:w-3/5 px-[10px]">
        <div className="page-header text-center text-4xl sm:text-5xl mt-12 font-bold montserrat mb-[-16px]">
          <span>About The Reformer's House</span>
        </div>
      </div>
    </section>
  );
}

export default AboutTop;
