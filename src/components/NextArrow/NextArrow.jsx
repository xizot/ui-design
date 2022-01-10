import { Skeleton } from '@mui/material';
import React from 'react';
import { SliderNav } from '../MovieSlider/MovieSlider.elements';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <SliderNav {...props} onClick={onClick} color="primary">
      {props.loading ? (
        <Skeleton variant="circular" width={22} height={22} />
      ) : (
        <box-icon name="chevron-right" color="#fff"></box-icon>
      )}
    </SliderNav>
  );
}

export default NextArrow;
