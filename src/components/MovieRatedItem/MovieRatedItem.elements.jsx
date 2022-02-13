import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { theme } from '../../GlobalMUI';

export const MovieRatedWrapper = styled(Link)({
  display: 'flex',
  color: '#000',
  '&:hover .movie-title': {
    textDecoration: 'underline',
  },
});

export const MovieRatedImage = styled('img')({
  width: 150,
  height: 150,
  objectFit: 'cover',
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    width: 80,
    height: 80,
  },
});

export const MovieRatedInformation = styled(Box)({
  paddingTop: theme.spacing(0.5),
  [theme.breakpoints.down('sm')]: {
    paddingTop: 0,
  },
});

export const MovieRatedTitle = styled(Typography)({
  fontWeight: 600,
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

export const MovieRatedDateCreated = styled(Typography)({
  fontSize: 14,
  opacity: 0.8,
});

export const MovieRatedComment = styled(Typography)({
  fontSize: 14,
  marginTop: theme.spacing(1.5),
  display: '-webkit-box',
  WebkitLineClamp: '3',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(1),
  },
});
