import { Rating, Box, Skeleton } from '@mui/material';
import React from 'react';

import StarIcon from '@mui/icons-material/Star';
import {
  MovieRatedImage,
  MovieRatedInformation,
  MovieRatedWrapper,
  MovieRatedTitle,
  MovieRatedDateCreated,
  MovieRatedComment,
} from './MovieRatedItem.elements';
import { labels } from '../../ultis/reusable';
import { theme } from '../../GlobalMUI';

function MovieRatedItem({
  id,
  imgSrc,
  title,
  loading = 0,
  score,
  comment,
  dateCreated = '10 phút trước',
}) {
  return (
    <MovieRatedWrapper
      to={`/details/${id}#comment`}
      sx={{ pointerEvents: loading ? 'none' : 'all' }}>
      {loading ? (
        <React.Fragment>
          <Skeleton
            variant="rectangular"
            sx={{
              width: { xs: 80, md: 150 },
              height: { xs: 80, md: 150 },
              marginRight: theme.spacing(2),
            }}
          />
          <MovieRatedInformation sx={{ flex: 1 }}>
            <Skeleton variant="text" />
            <Skeleton variant="text" width={100} />
            <Skeleton variant="text" width={150} />
            <Skeleton variant="rectangular" height={50} />
          </MovieRatedInformation>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <MovieRatedImage src={imgSrc} alt="" />
          <MovieRatedInformation>
            <MovieRatedTitle className="movie-title">{title}</MovieRatedTitle>
            <MovieRatedDateCreated>{dateCreated}</MovieRatedDateCreated>
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
            <MovieRatedComment>{comment}</MovieRatedComment>
          </MovieRatedInformation>
        </React.Fragment>
      )}
    </MovieRatedWrapper>
  );
}

export default MovieRatedItem;
