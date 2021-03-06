import { Button, Rating, Typography, Box } from '@mui/material';
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
import { labels } from '../../ultis/reusable';

function MovieItemRated({
  id,
  imgSrc,
  title,
  loading = false,
  score,
  comment,
  dateCreated = '10 phút',
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
              <MovieTitleRated to={`/details/${id}`} className="movie-title">
                {title}
              </MovieTitleRated>

              <Typography variant="body2" sx={{ marginBottom: 1 }}>
                10 Phút trước
              </Typography>
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
