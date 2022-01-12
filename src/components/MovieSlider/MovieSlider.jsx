import React from "react";
import Slider from "react-slick";
import MovieItem from "../MovieItem/MovieItem";
import NextArrow from "../NextArrow/NextArrow";
import PrevArrow from "../PrevArrow/PrevArrow";
import Section from "../Section/Section";

function MovieSlider({ title, movies, loading }) {
  const slider = React.useRef(null);
  const newSettings = {
    dots: false,
    infinite: movies?.length >= 5 ? true : false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: movies?.length >= 4 ? true : false,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: movies?.length >= 3 ? true : false,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: movies?.length >= 2 ? true : false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: movies?.length >= 1 ? true : false,
        },
      },
    ],
  };

  return (
    <>
      <Section title={title} loading={loading}>
        <PrevArrow
          prev={"-20px"}
          prevmb={"-15px"}
          onClick={() => slider?.current?.slickPrev()}
          loading={loading ? 1 : 0}
        />
        <NextArrow
          next={"-20px"}
          nextmb={"-15px"}
          onClick={() => slider?.current?.slickNext()}
          loading={loading ? 1 : 0}
        />
        <Slider {...newSettings} ref={slider} className='movie-slider'>
          {loading
            ? [0, 0, 0, 0, 0, 0].map((_, i) => (
                <MovieItem key={i} loading={loading ? 1 : 0} />
              ))
            : movies?.length > 0 &&
              movies.map((movie, i) => (
                <MovieItem
                  key={i}
                  id={movie.id}
                  title={movie.title}
                  imgSrc={movie.poster_path}
                  score={movie.vote_average}
                  releasedAt={movie.release_date}
                />
              ))}
        </Slider>
      </Section>
    </>
  );
}

export default MovieSlider;
