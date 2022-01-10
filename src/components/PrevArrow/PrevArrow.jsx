import { Skeleton } from '@mui/material';
import React from 'react';
import { SliderNav } from '../MovieSlider/MovieSlider.elements';

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <SliderNav {...props} onClick={onClick} color="primary">
      {props.loading ? (
        <Skeleton variant="circular" width={22} height={22} />
      ) : (
        <box-icon name="chevron-left" color="#fff"></box-icon>
      )}
    </SliderNav>
  );
}

export default PrevArrow;
