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
import { commentActions } from '../../redux/actions/comment.action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
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
  '.hidden-button': {
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    padding: 0,
    margin: 0,
    minWidth: 'unset',
    background: 'unset !important',
    boxShadow: 'unset !important',
    cursor: 'pointer',
    '&:[disabled]': {
      color: '#C0C0C0 !important',
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
  '.total-t': {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      display: 'unset',
    },
  },
  '.date-review': {
    position: 'absolute',
    bottom: 1,
    right: 1,
    [theme.breakpoints.down('lg')]: {
      position: 'unset',
      marginTop: '5px',
    },
  },
  '.box-review': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
      display: 'unset',
    },
  },
});

function Comment({
  movieId,
  id,
  score,
  name,
  img,
  review,
  numberLike,
  numberDislike,
  created_at,
  affect = -1,
}) {
  const history = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const like_clicked = () => {
    if (!isAuthenticated) {
      history(`/login?backUrl=/details/${movieId}#comment`);
    }
    dispatch(commentActions.like(+id));
  };

  const dislike_clicked = () => {
    if (!isAuthenticated) {
      history(`/login?backUrl=/details/${movieId}#comment`);
    }
    dispatch(commentActions.dislike(+id));
  };
  return (
    <CommentContainer>
      <Grid container spacing={2}>
        <Grid item xs={6} md={2}>
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
              <Button className="hidden-button" onClick={like_clicked}>
                <box-icon
                  name="like"
                  type={
                    (isAuthenticated && affect === 1 && 'solid') || 'regular'
                  }
                  color="#112D4E"
                  size="sm"
                  style={{ marginRight: '15px' }}></box-icon>
              </Button>

              <Button className="hidden-button" onClick={dislike_clicked}>
                <box-icon
                  name="dislike"
                  size="sm"
                  type={
                    (isAuthenticated && affect === 0 && 'solid') || 'regular'
                  }></box-icon>
              </Button>
            </div>
            <div className="number-like">
              <div className="number-icon-like">{numberLike}</div>
              <div>{numberDislike}</div>
            </div>
          </Info>
        </Grid>
        <Grid item xs={6} md={10} sx={{ position: 'relative' }}>
          <Review>
            <Box className="box-review">
              <Box className="total-t">
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
            <Typography variant="body2" className="date-review">
              {created_at}
            </Typography>
          </Review>
        </Grid>
      </Grid>
    </CommentContainer>
  );
}
export default Comment;
