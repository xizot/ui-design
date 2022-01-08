import { Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { listPopular } from '../../pages/Home/Home.data';
import {
  ButtonViewDetails,
  MainvisualInfo,
  MainvisualItem,
  MainVisualLabel,
  MainVisualMovieTitle,
  MainVisualScore,
  MainvisualWrapper,
  SliderPaging,
  SliderPagingItem,
} from './Mainvisual.elements';

function Mainvisual() {
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
        <SliderPaging className="sliderPaging">
          <SliderPagingItem variant="body1" className="sliderPagingItem">
            {`0${i + 1}`.slice(-2)}
          </SliderPagingItem>
        </SliderPaging>
      );
    },
  };
  return (
    <MainvisualWrapper>
      <Container>
        <Slider {...settings}>
          {listPopular.map((movie, index) => (
            <MainvisualItem className="sliderItem" key={index}>
              <div className="sliderImage">
                <img src={movie.backdrop_path} alt="" />
              </div>
              <MainvisualInfo>
                <Container>
                  <MainVisualLabel variant="h5">PHIM NỔI BẬT</MainVisualLabel>
                  <MainVisualMovieTitle variant="h4">
                    {movie.title}
                  </MainVisualMovieTitle>
                  <MainVisualScore>
                    <box-icon
                      name="star"
                      type="solid"
                      color="#ffe700"
                      size="lg"></box-icon>
                    <Typography variant="h3" component="p">
                      {movie.vote_average}
                    </Typography>
                  </MainVisualScore>
                  <Typography variant="body1" className="sliderDescription">
                    {movie.overview}
                  </Typography>
                  <Link to={`/details/${movie._id}`}>
                    <ButtonViewDetails
                      variant="contained"
                      color="primary"
                      endIcon={
                        <box-icon
                          className="icon"
                          name="right-arrow-alt"
                          color="#fff"></box-icon>
                      }>
                      Xem Chi Tiết
                    </ButtonViewDetails>
                  </Link>
                </Container>
              </MainvisualInfo>
            </MainvisualItem>
          ))}
        </Slider>
      </Container>
    </MainvisualWrapper>
  );
}

export default Mainvisual;
