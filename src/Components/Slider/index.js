import React from 'react';
import Slider from 'react-slick';
import { slideSettings } from '../../settings';

function SliderComponent(props){
return <Slider {...slideSettings}>{props.children}</Slider>
}

export default SliderComponent