import React from 'react';
import { SliderNav } from '../MovieSlider/MovieSlider.elements';

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <SliderNav {...props} onClick={onClick} color="primary">
      <box-icon name="chevron-left" color="#fff"></box-icon>
    </SliderNav>
  );
}

export default PrevArrow;
