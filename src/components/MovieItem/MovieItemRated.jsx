import { Button, Rating } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {
  MovieImageRated,
  MovieImageWrapperRated,
  MovieTitleRated,
  MovieWrapperRated,
  MovieContentText,
  MovieHoverRated,
  MovieInfomation,
  MovieReview,
} from './MovieItem.elements';
import MovieItemSkeleton from './MovieItemSkeleton';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: '1/10',
  1: '2/10',
  1.5: '3/10',
  2: '4/10',
  2.5: '5/10',
  3: '6/10',
  3.5: '7/10',
  4: '8/10',
  4.5: '9/10',
  5: '10/10',
};

function MovieItemRated({
  id,
  imgSrc,
  title,
  loading = false,
  score,
  comment,
}) {
  return (
    <MovieWrapperRated>
      {loading ? (
        <MovieItemSkeleton />
      ) : (
        <>
          <MovieImageWrapperRated>
            <MovieImageRated src={imgSrc} alt="" />
            <MovieHoverRated to={`/details/${id}`} className="on-hover">
              <Button
                variant="contained"
                color="primary"
                style={{
                  maxWidth: '150px',
                  padding: '5px',
                }}
                endIcon={
                  <box-icon color="#fff" name="right-arrow-alt"></box-icon>
                }>
                Xem chi tiết
              </Button>
            </MovieHoverRated>
          </MovieImageWrapperRated>
          <MovieInfomation>
            <MovieContentText>
              <MovieTitleRated
                to={`/details/${id}`}
                className="movie-title"
                style={{ marginLeft: '2px' }}>
                {title}
              </MovieTitleRated>
              <Box display="flex" alignItems="center">
                <Rating
                  value={score}
                  precision={0.5}
                  name="disabled"
                  disabled
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {score !== null && (
                  <Box sx={{ ml: 2, mt: '3px' }}>{labels[score]}</Box>
                )}
              </Box>
              <MovieReview>{comment}</MovieReview>
            </MovieContentText>
          </MovieInfomation>
        </>
      )}
    </MovieWrapperRated>
  );
}

export default MovieItemRated;
