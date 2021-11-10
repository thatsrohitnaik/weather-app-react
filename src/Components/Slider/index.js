import React from 'react';
import Slider from 'react-slick';
import { slideSettings } from '../../settings';

function SliderComponent(props){

    const callthismethod= () =>{
        console.log("called this emthod")
    }

    const slideSettings2 = {
        arrows: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        afterChange: function (){
          console.log("afte change");

          callthismethod();

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
    
    


return <Slider {...slideSettings2}>{props.children}</Slider>
}

export default SliderComponent