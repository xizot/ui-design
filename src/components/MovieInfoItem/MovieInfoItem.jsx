import { Skeleton, Typography } from '@mui/material';
import React from 'react';
import { theme } from '../../GlobalMUI';
import { Label } from '../ModScoreItem/ModScoreItem.elements';
import { MovieInfoItemWrapper } from './MovieInfoItem.elements';

function MovieInfoItem({ title, content, loading = false }) {
  return (
    <MovieInfoItemWrapper>
      {loading ? (
        <>
          <Skeleton
            variant="text"
            width={120}
            height={30}
            sx={{ marginRight: theme.spacing(2) }}
          />
          <Skeleton variant="text" sx={{ flex: 1 }} height={30} />
        </>
      ) : (
        <>
          <Label minWidth={120}>{title}: </Label>
          <Typography
            variant="body1"
            sx={{ flex: 1, color: '#3F72AF', fontWeight: 500 }}>
            {content}
          </Typography>
        </>
      )}
    </MovieInfoItemWrapper>
  );
}

export default MovieInfoItem;
