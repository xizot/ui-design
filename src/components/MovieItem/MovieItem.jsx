import { Button } from "@mui/material";
import React from "react";
import {
  MovieContent,
  MovieImage,
  MovieImageWrapper,
  MovieTitle,
  MovieWrapper,
  MovieTimer,
  MovieContentText,
  MovieScoreWrapper,
  MovieScore,
  MovieHover,
} from "./MovieItem.elements";
import MovieItemSkeleton from "./MovieItemSkeleton";

function MovieItem({ id, imgSrc, title, score, releasedAt, loading = false }) {
  return (
    <MovieWrapper>
      {loading ? (
        <MovieItemSkeleton />
      ) : (
        <>
          <MovieImageWrapper>
            <MovieImage src={imgSrc} />
            <MovieHover to={`/details/${id}`} className='on-hover'>
              <Button
                variant='contained'
                color='primary'
                endIcon={
                  <box-icon color='#fff' name='right-arrow-alt'></box-icon>
                }
              >
                Xem chi tiết
              </Button>
            </MovieHover>
          </MovieImageWrapper>
          <MovieContent to={`/details/${id}`}>
            <MovieContentText>
              <MovieTitle>{title}</MovieTitle>
              <MovieTimer>{releasedAt}</MovieTimer>
            </MovieContentText>
            <MovieScoreWrapper>
              <MovieScore>{score}</MovieScore>
            </MovieScoreWrapper>
          </MovieContent>
        </>
      )}
    </MovieWrapper>
  );
}

export default MovieItem;
