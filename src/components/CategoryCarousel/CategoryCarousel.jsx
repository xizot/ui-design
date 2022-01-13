import { Container, Box, Skeleton } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  CategoryCarouselItem,
  CategoryCarouselWrapper,
} from "./CategoryCarousel.elements";
import NextArrow from "../NextArrow/NextArrow";
import PrevArrow from "../PrevArrow/PrevArrow";
import { getListCategory } from "./CategoryCarousel.data";
import { theme } from "../../GlobalMUI";

function CategoryCarousel() {
  const slider = React.useRef(null);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
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

  const getListGenresHandler = useCallback(async () => {
    setLoading(true);
    var fetch = await getListCategory();
    setGenres(fetch);
    setLoading(false);
  }, []);

  useEffect(() => {
    getListGenresHandler();
  }, [getListGenresHandler]);
  return (
    <CategoryCarouselWrapper className='category-carousel'>
      <Container>
        <Box
          position='relative'
          sx={{
            padding: {
              xs: theme.spacing(0, 5),
              md: theme.spacing(0, 7),
            },
          }}
        >
          <PrevArrow
            prev={"0px"}
            prevmb={"0px"}
            onClick={() => slider?.current?.slickPrev()}
            loading={loading ? 1 : 0}
          />
          <NextArrow
            next={"0px"}
            nextmb={"0px"}
            onClick={() => slider?.current?.slickNext()}
            loading={loading ? 1 : 0}
          />
          <Slider {...settings} ref={slider}>
            {loading
              ? [0, 0, 0, 0, 0, 0, 0, 0].map((_, i) => (
                  <CategoryCarouselItem key={i}>
                    <Skeleton variant='text' width={100} height='100%' />
                  </CategoryCarouselItem>
                ))
              : genres.map((genre, i) => (
                  <CategoryCarouselItem key={i}>
                    <Link to={`/search?q=""&genre=${genre.id}`}>
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
