import { Box, Button, Typography, styled } from '@mui/material';
import {
  defaultSectionMargin,
  defaultSectionMarginMobile,
  theme,
} from '../../GlobalMUI';

export const MainvisualWrapper = styled('div')({
  position: 'relative',
  marginBottom: defaultSectionMargin,
  [theme.breakpoints.down('lg')]: {
    marginBottom: defaultSectionMarginMobile,
  },
  '& .slick-dots': {
    position: 'absolute',
    bottom: 45,
    left: '50%',
    transform: 'translateX(-50%)',
    maxWidth: 1200,
    padding: theme.spacing(0, 2),
    textAlign: 'right',
    zIndex: 2,
    '& > li': {
      marginRight: theme.spacing(3),
    },
    '& > li.slick-active .sliderPaging': {
      opacity: 1,
      background: 'rgba(0,0,0,.6)',
      border: `2px solid #cecece`,
      '&:after': {
        opacity: 1,
      },
    },
  },

  '& .sliderPaging': {},
  '& .sliderPagingItem': {},
  '& .sliderItem': {},
  '& .sliderImage': {
    width: '100%',
    height: '100%',
    position: 'relative',
    paddingTop: '34.2%',
    '&>img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1,
      filter: 'blur(4px)',
      opacity: 0.6,
    },
    // '&:before': {
    //   content: "''",
    //   position: 'absolute',
    //   left: 0,
    //   top: 0,
    //   width: '100%',
    //   height: '100%',
    //   background: 'rgba(255,255,255,.5)',
    //   zIndex: 0,
    // },
  },
  '& .sliderInfo': {},
  '& .sliderTitle': {},
  '& .sliderDescription': {
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    opacity: 0.7,
    marginBottom: theme.spacing(5),
    width: 700,
    maxWidth: '100%',
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
});

export const MainvisualItemImage = styled('div')({
  width: '100%',
  height: '100%',
  '& .img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

export const MainvisualItem = styled('div')({
  height: '35vh',
  minHeight: 450,
  width: '100%',
  display: 'block',
  position: 'relative',
  zIndex: 2,
});

export const ButtonViewDetails = styled(Button)({
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  width: 'fit-content',
});

export const MainvisualInfo = styled(Box)({
  position: 'absolute',
  width: '100%',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  color: 'white',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
});

export const MainVisualMovieTitle = styled(Typography)({
  fontSize: 50,
  fontWeight: 'bold',
  width: '60rem',
  maxWidth: '100%',
  color: '#7C4D4A',
  textShadow: '0px 0px #000',
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    fontSize: 28,
  },
});

export const MainVisualLabel = styled(Typography)({
  opacity: 0.8,
  marginBottom: theme.spacing(1),
  color: '#000',
  fontWeight: 600,
  fontSize: 28,
  [theme.breakpoints.down('sm')]: {
    fontSize: 20,
  },
});

export const SliderPaging = styled('div')({
  width: 40,
  height: 40,
  borderRadius: '50%',
  textAlign: 'center',
  opacity: 0.6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '&:after': {
    opacity: 0,
    content: "''",
    position: 'absolute',
    bottom: -10,
    left: '50%',
    transform: 'translate(-50%, 100%)',
    width: 1,
    height: 27,
    background: '#cecece',
  },
});

export const SliderPagingItem = styled(Typography)({
  fontWeight: 700,
  fontFamily: 'Archivo Black, sans-serif',
  lineHeight: 0,
  color: '#fff',
});

export const MainVisualScore = styled('div')({
  display: 'flex',
  marginBottom: theme.spacing(1),
  alignItems: 'center',
});
