import { Typography } from '@mui/material';
import React from 'react';
import { Label } from '../ModScoreItem/ModScoreItem.elements';
import { MovieInfoItemWrapper } from './MovieInfoItem.elements';

function MovieInfoItem({ title, content }) {
  return (
    <MovieInfoItemWrapper>
      <Label minWidth={120}>{title}: </Label>
      <Typography variant="body1" sx={{ flex: 1 }}>
        {content}
      </Typography>
    </MovieInfoItemWrapper>
  );
}

export default MovieInfoItem;
