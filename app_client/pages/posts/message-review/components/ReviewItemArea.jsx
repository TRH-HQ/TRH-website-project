import React, { useState } from 'react';
import Image from 'next/image';
import postBanner from '../../../../assets/images/interior-1.jpg';
import PurchaseButtonNoFill from '../../../../components/buttons/PurchaseButtonNoFill';
import PurchaseOptionsMenu from '../../../../components/PurchaseOptionsMenu';
import CustomButtonNoFill from '../../../../components/buttons/CustomButtonNoFill';

function ReviewItemArea() {
  const [showPurchaseOptionsMenu, setshowPurchaseOptionsMenu] = useState(false);

  function toggleMenu() {
    setshowPurchaseOptionsMenu(!showPurchaseOptionsMenu);
  }

  return (
    <div className="flex w-full flex-col mb-6 mt-12">
      <div className="mx-auto w-full">
        <Image src={postBanner} alt="post-banner" layout="responsive" placeholder="blur" priority />
      </div>
      <div>
        <CustomButtonNoFill>
          <div className="pt-[10px] pb-[8px] uppercase">Download</div>
        </CustomButtonNoFill>
      </div>
    </div>
  );
}

export default ReviewItemArea;
