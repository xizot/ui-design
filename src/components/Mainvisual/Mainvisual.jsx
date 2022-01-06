import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  ButtonViewDetails,
  MainvisualInfo,
  MainvisualItem,
  MainvisualWrapper,
} from "./Mainvisual.elements";

function Mainvisual() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Reject",
      score: "8.0",
      releasedAt: 2021,
      backDrop: "https://i.imgur.com/qsHPJRr.jpg",
      overview:
        "a short description of something that provides general information but no details: I'll give you a brief overview of what the job involves.",
    },
    {
      id: 2,
      title: "The Matrix ",
      score: "8.0",
      releasedAt: 2021,
      backDrop: "https://i.imgur.com/qsHPJRr.jpg",
      overview:
        "a short description of something that provides general information but no details: I'll give you a brief overview of what the job involves.",
    },
    {
      id: 3,
      title: "The Matrix ",
      score: "8.0",
      releasedAt: 2021,
      backDrop: "https://i.imgur.com/qsHPJRr.jpg",
      overview:
        "a short description of something that provides general information but no details: I'll give you a brief overview of what the job involves.",
    },
  ]);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    customPaging: function (i) {
      return (
        <div className='sliderPaging'>
          <Typography variant='body1' className='sliderPagingItem'>
            {`0${i + 1}`.slice(-2)}
          </Typography>
        </div>
      );
    },
  };
  return (
    <MainvisualWrapper>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <MainvisualItem className='sliderItem' key={index}>
            <div className='sliderImage'>
              <img src={movie.backDrop} alt='' />
            </div>
            <MainvisualInfo>
              <Container>
                <Typography variant='h4' className='sliderTitle'>
                  {movie.title}
                </Typography>
                <Typography variant='body1' className='sliderDescription'>
                  {movie.overview}
                </Typography>
                <Link to={`/details/${movie._id}`}>
                  <ButtonViewDetails
                    variant='contained'
                    color='primary'
                    endIcon={
                      <box-icon
                        className='icon'
                        name='right-arrow-alt'
                        color='#fff'
                      ></box-icon>
                    }
                  >
                    Xem Chi Tiết
                  </ButtonViewDetails>
                </Link>
              </Container>
            </MainvisualInfo>
          </MainvisualItem>
        ))}
      </Slider>
    </MainvisualWrapper>
  );
}

export default Mainvisual;
