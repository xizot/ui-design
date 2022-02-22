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
  marginBottom: theme.spacing(2),
  border: '1px solid #FFF',
  boxShadow: theme.shadows[4],
  borderRadius: '4px',
  display: "flex"
});

export const Info = styled('div')({
  padding: theme.spacing(1),
  width: 200,
  [theme.breakpoints.down("768")]: {
    width: 'auto'
  },
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

export const CommentReview = styled(Typography)({
  lineHeight: 1.2,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(1)
  }
})

export const Username = styled(Typography)({
  textAlign: "center",
  [theme.breakpoints.down("768")]: {
    fontSize: 18,
    lineHeight: 1.2,
    textAlign: "left",
    marginBottom: theme.spacing(1)

  }
})

export const DateReview = styled(Typography)({
  textAlign: "right",
  marginTop: "auto"

})
export const Review = styled('div')({
  flex: 1,
  padding: theme.spacing(1),
  display: "flex",
  flexDirection: "column",

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

  '.box-review': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
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

      <Info>
        <div className="image-container">
          <Avatar
            className="image"
            alt="Remy Sharp"
            src={img || '/static/images/avatar/2.jpg'}
          />
        </div>
        <Username variant="h6" component="p" className="pc-only">{name}</Username>

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


      <Review>
        <Box className="box-review">
          <Username variant="h6" component="p" className="sp-only">{name}</Username>
          <Box width="100%" flexWrap="wrap" alignItems="center" sx={{
            display: {
              xs: "block", md: "flex"
            },
          }}>
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
              <Box className='pc-only' sx={{ margin: { xs: '5px 0px', md: '0px 5px' } }}>{labels[score]}</Box>
            )}
            <Button
              color="secondary"
              variant="outlined"
              size="small"
              sx={{ fontSize: 11, marginLeft: { xs: "unset", md: "auto" } }}
              startIcon={<Flag fontSize="small" />}>
              Báo cáo
            </Button>
          </Box>
        </Box>
        <CommentReview>{review}</CommentReview>
        <DateReview variant="caption">
          {created_at}
        </DateReview>
      </Review>
    </CommentContainer>
  );
}
export default Comment;
