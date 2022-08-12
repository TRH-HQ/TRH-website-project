import React, { useState } from 'react';
import Image from 'next/image';
import postBanner from '../../../../assets/images/interior-1.jpg';
import PurchaseButtonNoFill from '../../../../components/buttons/PurchaseButtonNoFill';
import PurchaseOptionsMenu from '../../../../components/PurchaseOptionsMenu';

function ReviewItemArea() {
  const [showPurchaseOptionsMenu, setshowPurchaseOptionsMenu] = useState(false);

  function toggleMenu() {
    setshowPurchaseOptionsMenu(!showPurchaseOptionsMenu);
  }

  return (
    <aside className="flex w-full flex-col lg:w-[220px] lg:ml-auto lg:mr-12 xl:mr-[100px]">
      <div className="w-[220px] h-[300px] relative mt-12 sm:mt-20 mx-auto">
        <Image src={postBanner} alt="post-banner" layout="fill" placeholder="blur" priority />
      </div>
      <div className="w-[220px] mx-auto">
        <PurchaseButtonNoFill
          toggleMenu={toggleMenu}
          showPurchaseOptionsMenu={showPurchaseOptionsMenu}
        />
        {showPurchaseOptionsMenu && <PurchaseOptionsMenu />}
      </div>
    </aside>
  );
}

export default ReviewItemArea;
