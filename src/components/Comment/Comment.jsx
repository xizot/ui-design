import { Flag } from '@mui/icons-material';
import Star from '@mui/icons-material/Star';
import {
  Box,
  Avatar,
  Grid,
  styled,
  Rating,
  Typography,
  Button,
} from '@mui/material';
import React from 'react';
import { theme } from '../../GlobalMUI';
import { labels } from '../../ultis/reusable';
import { MovieReview } from '../MovieItem/MovieItem.elements';

export const CommentContainer = styled('div')({
  padding: theme.spacing(2),
  border: '1px solid #FFF',
  boxShadow: theme.shadows[4],
  borderRadius: '4px',
  marginBottom: '21px',
  minHeight: '165px',
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
  '.report': {
    marginRight: '30px',
    padding: '3px',
    position: 'absolute',
    right: 0,
  },
  '.date': {
    fontSize: '14px',
    fontWeight: 'bold',
    marginRight: '30px',
    padding: '3px',
    position: 'absolute',
    right: 0,
  },
});

function Comment({
  score,
  name,
  img,
  review,
  numberLike,
  numberDislike,
  dateCreated,
}) {
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
        <Grid item xs={6} md={9} sx={{ position: 'relative' }}>
          <Review>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              marginBottom={2}>
              <Box display="flex" alignItems="center">
                <Rating
                  value={score}
                  precision={0.5}
                  name="disabled"
                  disabled
                  emptyIcon={
                    <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {score !== null && (
                  <Box sx={{ ml: 2, mt: '3px' }}>{labels[score]}</Box>
                )}
              </Box>
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                sx={{ fontSize: 11 }}
                startIcon={<Flag fontSize="small" />}>
                Báo cáo
              </Button>
            </Box>
            <MovieReview sx={{ marginBottom: 3 }}>{review}</MovieReview>
            <Typography
              variant="body2"
              sx={{ position: 'absolute', bottom: 1, right: 1 }}>
              Ngày 21 tháng 12 năm 2021, lúc 23:23
            </Typography>
          </Review>
        </Grid>
      </Grid>
    </CommentContainer>
  );
}
export default Comment;
