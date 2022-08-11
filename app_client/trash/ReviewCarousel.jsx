import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { Component } from 'react';
import Slider from 'react-slick';
import BookReviewCard from '../components/post-type-cards/BookReviewCard';

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <BookReviewCard />
          </div>
          <div>
            <BookReviewCard />
          </div>
          <div>
            <BookReviewCard />
          </div>
          <div>
            <BookReviewCard />
          </div>
          <div>
            <BookReviewCard />
          </div>
          <div>
            <BookReviewCard />
          </div>
        </Slider>
      </div>
    );
  }
}
