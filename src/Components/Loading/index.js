import React from 'react';
import Slider from 'react-slick';
import { slideSettings } from '../../settings';
import Skeleton from '@mui/material/Skeleton';

export default function Loading() {


  const callThisMethod  = () =>{
    console.log("Method Called")
  }

  // const set = { ...slideSettings, arrows: false, afterChange: function (){
  //   console.log("do somehing");
  //   callThisMethod();
  // } };


  const slideSettings2 = {
    arrows: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: function (){
      console.log("afte change");
      // if we can connect store here then all isse ares solved
     
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          infinite: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          className: 'mobile-view-carousel'
        },
      },
    ],
  };

  const set = { ...slideSettings};

  console.log(set)

  return (
    <div>
      <br />
      <Slider {...slideSettings2} id="skeleton">
        <div>
          <Skeleton variant="rectangular" width={'95%'} height={118} />
          <Skeleton width="95%" />
          <Skeleton width="60%" />
        </div>
        <div>
          <Skeleton variant="rectangular" width={'95%'} height={118} />
          <Skeleton width="95%" />
          <Skeleton width="60%" />
        </div>
        <div>
          <Skeleton variant="rectangular" width={'95%'} height={118} />
          <Skeleton width="95%" />
          <Skeleton width="60%" />
        </div>
      </Slider>
    </div>
  );
}
