import { Button, Typography, Avatar, Grid, styled } from '@mui/material';
import React from 'react';
import { theme } from '../../GlobalMUI';
import {
  MovieStart,
  MovieScoreRated,
  MovieReview,
} from '../MovieItem/MovieItem.elements';

export const CommentContainer = styled('div')({
  padding: theme.spacing(2),
  border: '1px solid #FFF',
  boxShadow: '0 0 8px rgba(0, 0, 0, 0.6)',
  borderRadius: '4px',
  marginBottom: '21px',
  height: '160px',
});

export const Info = styled('div')({
  padding: theme.spacing(1),
  '.name': {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  '.image': {
    margin: '0 0 5px 0px',
  },
  '.image-container': {
    display: 'flex',
    justifyContent: 'center',
  },
  '.like': {
    textAlign: 'center',
    '.icon-like': {
      marginRight: '15px',
    },
  },
  '.number-like': {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    '.number-icon-like': {
      marginRight: '15px',
    },
  },
});

export const Review = styled('div')({
  padding: theme.spacing(1),
});

function Comment({ score, name, img, review, numberLike, numberDislike }) {
  return (
    <CommentContainer>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Info>
            <div className="image-container">
              <Avatar
                className="image"
                alt="Remy Sharp"
                src={img || '/static/images/avatar/2.jpg'}
              />
            </div>
            <div className="name">{name}</div>
            <div className="like">
              <box-icon
                name="like"
                type="solid"
                color="#112D4E"
                size="sm"
                style={{ marginRight: '15px' }}></box-icon>
              <box-icon name="dislike" size="sm"></box-icon>
            </div>
            <div className="number-like">
              <div className="number-icon-like">{numberLike}</div>
              <div>{numberDislike}</div>
            </div>
          </Info>
        </Grid>
        <Grid item xs={6} md={9}>
          <Review>
            <MovieStart style={{ padding: '0' }}>
              <box-icon
                name="star"
                type="solid"
                color="#ffe700"
                size="sm"></box-icon>
              <box-icon
                name="star"
                type="solid"
                color="#ffe700"
                size="sm"></box-icon>
              <box-icon
                name="star"
                type="solid"
                color="#ffe700"
                size="sm"></box-icon>
              <box-icon
                name="star"
                type="solid"
                color="#ffe700"
                size="sm"></box-icon>
              <box-icon
                name="star"
                type="solid"
                color="#ffe700"
                size="sm"></box-icon>
              <MovieScoreRated>{Math.round(score)}/10</MovieScoreRated>
            </MovieStart>
            <MovieReview>{review}</MovieReview>
          </Review>
        </Grid>
      </Grid>
    </CommentContainer>
  );
}
export default Comment;
