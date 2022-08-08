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
    <aside className="flex w-full flex-col">
      <div className="mx-auto w-[220px] h-[300px] relative mt-20">
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
