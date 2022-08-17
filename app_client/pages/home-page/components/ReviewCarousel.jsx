import React, { Component } from 'react';
import Slider from 'react-slick';
import BookReviewCard from '../../../components/post-type-cards/BookReviewCard';

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
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
