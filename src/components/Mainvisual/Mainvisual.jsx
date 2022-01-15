import { Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { theme } from '../../GlobalMUI';
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
import MainvisualSkeleton from './MainvisualSkeleton';

function Mainvisual({ loading, list }) {
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
        <Slider
          {...settings}
          style={{
            boxShadow:
              '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
          }}>
          {loading ? (
            <MainvisualSkeleton />
          ) : (
            list?.length &&
            list.map((movie, index) => (
              <MainvisualItem className="sliderItem" key={index}>
                <div className="sliderImage">
                  <img src={movie.backdrop_path} alt="" />
                </div>
                <MainvisualInfo>
                  <Container>
                    <MainVisualLabel variant="h3">PHIM NỔI BẬT</MainVisualLabel>
                    <MainVisualMovieTitle variant="h4">
                      {movie.title}
                    </MainVisualMovieTitle>
                    <MainVisualScore>
                      <box-icon
                        name="star"
                        type="solid"
                        color="#ffe700"
                        size="lg"></box-icon>
                      <Typography
                        variant="h3"
                        component="p"
                        sx={{
                          fontSize: { xs: 20, md: 28 },
                          fontWeight: 600,
                          color: '#000',
                          marginLeft: '5px',
                        }}>
                        {movie.vote_average}
                      </Typography>
                    </MainVisualScore>
                    <Typography
                      variant="body1"
                      className="sliderDescription"
                      color="primary">
                      {movie.overview}
                    </Typography>
                    <Link to={`/details/${movie.id}`}>
                      <ButtonViewDetails
                        sx={{
                          background: '#fff !important',
                          padding: theme.spacing(1, 2),
                          border: `1px solid #ddd`,
                          ':hover': { opacity: 0.8 },
                        }}
                        endIcon={
                          <box-icon
                            className="icon"
                            name="right-arrow-alt"
                            color={theme.palette.primary.main}></box-icon>
                        }>
                        Chi Tiết
                      </ButtonViewDetails>
                    </Link>
                  </Container>
                </MainvisualInfo>
              </MainvisualItem>
            ))
          )}
        </Slider>
      </Container>
    </MainvisualWrapper>
  );
}

export default Mainvisual;
