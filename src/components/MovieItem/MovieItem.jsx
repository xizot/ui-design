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
} from "./MovieItem.elements";
import MovieItemSkeleton from "./MovieItemSkeleton";

function MovieItem({ id, imgSrc, title, score, releasedAt, loading = false }) {
  return (
    <MovieWrapper to={`/details/${id}`}>
      {loading ? (
        <MovieItemSkeleton />
      ) : (
        <>
          <MovieImageWrapper>
            <MovieImage src={imgSrc} />
          </MovieImageWrapper>
          <MovieContent>
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
