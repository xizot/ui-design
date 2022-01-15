import { Button } from '@mui/material';
import React from 'react';
import {
  MovieContentRated,
  MovieImageRated,
  MovieImageWrapperRated,
  MovieTitleRated ,
  MovieWrapperRated,
  MovieContentText,
  MovieHoverRated,
  MovieInfomation,
  MovieScoreRated,
  MovieStart,
  MovieReview,
} from './MovieItem.elements';
import MovieItemSkeleton from './MovieItemSkeleton';

function MovieItemRated({ id, imgSrc, title, loading = false, score }) {
  return (
    <MovieWrapperRated>
      {loading ? (
        <MovieItemSkeleton />
      ) : (
        <>
          <MovieImageWrapperRated>
            <MovieImageRated src={imgSrc} />
            <MovieHoverRated to={`/details/${id}`} className="on-hover">
              <Button
                variant="contained"
                color="primary"
                style={{
                  maxWidth: '150px',
                  padding: '5px'
                }}
                endIcon={
                  <box-icon color="#fff" name="right-arrow-alt"></box-icon>
                }>
                Xem chi tiết
              </Button>
            </MovieHoverRated>
          </MovieImageWrapperRated>
          <MovieInfomation >
            <MovieContentRated>
                <MovieContentText>
                    <MovieTitleRated to={`/details/${id}`} className="movie-title" style={{marginLeft: '2px'}}>{title}</MovieTitleRated>
                    <MovieStart>
                      <box-icon name="star" type="solid" color="#ffe700" size="sm"></box-icon>
                      <box-icon name="star" type="solid" color="#ffe700" size="sm"></box-icon>
                      <box-icon name="star" type="solid" color="#ffe700" size="sm"></box-icon>
                      <box-icon name="star" type="solid" color="#ffe700" size="sm"></box-icon>
                      <box-icon name="star" type="solid" color="#ffe700" size="sm"></box-icon>
                      <MovieScoreRated>{Math.round(score)}/10</MovieScoreRated>
                    </MovieStart>  
                    <MovieReview>Phim hay lắm</MovieReview>
                </MovieContentText>
            </MovieContentRated>
          </MovieInfomation >
        </>
    )}
    </MovieWrapperRated>
  );
}

export default MovieItemRated;