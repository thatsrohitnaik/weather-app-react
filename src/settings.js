export const slideSettings = {
  arrows: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  afterChange: function (){
    console.log("afte change")
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

export const apiURL =
  'https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40';

export const apiURL2 = '/data.json';
