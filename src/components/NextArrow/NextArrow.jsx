import React from "react";
import { SliderNav } from "../MovieSlider/MovieSlider.elements";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <SliderNav next={"true"} onClick={onClick} color='primary'>
      <box-icon name='chevron-right' color='#fff'></box-icon>
    </SliderNav>
  );
}

export default NextArrow;
