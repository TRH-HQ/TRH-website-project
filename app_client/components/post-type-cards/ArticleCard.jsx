import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DemoPic from '../../assets/images/shoe-3.jpg';
import PostTag from '../PostTag';

function ArticleCard() {
  return (
    <Link href="/posts/article">
      <a className="w-full lg:w-[290px] xl:w-3/12">
        <div className="article-card">
          <div
            className="w-full custom-background_card p-4 mx-auto"
            style={{ boxShadow: '0px 0px 30px #00000038' }}
          >
            <div
              className="post-image-wrapper w-full relative"
              style={{ boxShadow: '0px 0px 30px #00000038' }}
            >
              <PostTag>Article</PostTag>
              <Image alt="post-image" src={DemoPic} layout="responsive" objectFit="cover" />
            </div>
            <div className="post-title mt-3 montserrat font-bold text-lg leading-[22px]">
              Striving for faith in an entertainment age
            </div>
            <div className="post-brief mt-2 text-[14px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quae nemo voluptas ab
              tempore.
            </div>
            <div className="extra-details">
              <div className="author-section flex mt-4 items-center">
                <div
                  className="author-pic mr-3 w-[40px] h-[40px] bg-black"
                  style={{ borderRadius: '100%' }}
                >
                  <Image
                    src={DemoPic}
                    alt="post-author-pic"
                    width={40}
                    height={40}
                    placeholder="blur"
                    style={{ borderRadius: '100%' }}
                  />
                </div>
                <div className="text-left flex flex-col">
                  <div className="montserrat mb-1">
                    <span className="text-sm">Scott Hubbard</span>
                  </div>
                  <div className="text-sm custom-text_support">22/July/2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ArticleCard;
