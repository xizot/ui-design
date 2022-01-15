import { styled } from '@mui/material';
import {
  defaultSectionMargin,
  defaultSectionMarginMobile,
  theme,
} from '../../GlobalMUI';

export const CategoryCarouselWrapper = styled('div')({
  marginBottom: defaultSectionMargin,
  [theme.breakpoints.down('sm')]: {
    marginBottom: defaultSectionMarginMobile,
  },
});

export const CategoryCarouselItem = styled('div')({
  height: 35,
  margin: theme.spacing(1, 0),
  lineHeight: '35px',
  padding: theme.spacing(0, 1),
  '& a': {
    color: theme.palette.primary.main,
    padding: theme.spacing(0, 2),
    borderRadius: 999,
    background: '#DBE2EF',
    border: `1px solid ${theme.palette.primary.main}`,
    width: '100%',
    transition: 'all .5s',
    textAlign: 'center',
    wordBreak: 'break-word',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    '&:hover': {
      background: theme.palette.primary.main,
      color: '#fff',
    },
  },
});
