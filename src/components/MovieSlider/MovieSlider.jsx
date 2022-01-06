import { Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import MovieItem from "../MovieItem/MovieItem";
import NextArrow from "../NextArrow/NextArrow";
import PrevArrow from "../PrevArrow/PrevArrow";
import Section from "../Section/Section";
import { SliderTitle } from "./MovieSlider.elements";

function MovieSlider({ title, movies, loading = false }) {
  const slider = React.useRef(null);
  const newSettings = {
    dots: false,
    infinite: movies.length >= 5 ? true : false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: movies.length >= 4 ? true : false,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: movies.length >= 3 ? true : false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: movies.length >= 1 ? true : false,
        },
      },
    ],
  };

  return (
    <>
      <Section title={title}>
        <PrevArrow onClick={() => slider?.current?.slickPrev()} />
        <NextArrow onClick={() => slider?.current?.slickNext()} />
        <Slider {...newSettings} ref={slider}>
          {loading
            ? [0, 0, 0, 0, 0, 0].map((_, i) => (
                <MovieItem key={i} loading={true} />
              ))
            : movies.map((movie, i) => (
                <MovieItem
                  key={i}
                  id={movie.id}
                  title={movie.title}
                  imgSrc={movie.poster}
                  score={movie.score}
                  releasedAt={movie.releasedAt}
                  loading={false}
                />
              ))}
        </Slider>
      </Section>
    </>
  );
}

export default MovieSlider;
