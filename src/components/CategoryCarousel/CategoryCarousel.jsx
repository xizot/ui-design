import { Container, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {
  CategoryCarouselItem,
  CategoryCarouselWrapper,
} from './CategoryCarousel.elements';
import NextArrow from '../NextArrow/NextArrow';
import PrevArrow from '../PrevArrow/PrevArrow';
import { genres } from './CategoryCarousel.data';
import { theme } from '../../GlobalMUI';

function CategoryCarousel() {
  const slider = React.useRef(null);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          variableWidth: false,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <CategoryCarouselWrapper className="category-carousel">
      <Container>
        <Box
          position="relative"
          sx={{
            padding: {
              xs: theme.spacing(0, 5),
              md: theme.spacing(0, 7),
            },
          }}>
          <PrevArrow
            prev={'0px'}
            prevmb={'0px'}
            onClick={() => slider?.current?.slickPrev()}
          />
          <NextArrow
            next={'0px'}
            nextmb={'0px'}
            onClick={() => slider?.current?.slickNext()}
          />
          <Slider {...settings} ref={slider}>
            {genres.map((genre, i) => (
              <CategoryCarouselItem key={i}>
                <Link to={`/search?query=""&genre=${genre.id}`}>
                  {genre.title}
                </Link>
              </CategoryCarouselItem>
            ))}
          </Slider>
        </Box>
      </Container>
    </CategoryCarouselWrapper>
  );
}

export default CategoryCarousel;
