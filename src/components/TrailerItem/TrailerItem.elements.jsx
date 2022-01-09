import { styled, Typography } from '@mui/material';
import { theme } from '../../GlobalMUI';

export const TrailerItemWrapper = styled('div')({
  position: 'relative',
  padding: theme.spacing(0, 1.5),
});
export const TrailerItemContent = styled('div')({
  position: 'relative',
  cursor: 'pointer',
  '&:hover .on-hover': {
    opacity: 1,
  },
});
export const TrailerItemImage = styled('div')({
  position: 'relative',
  paddingTop: '100%',
  '& img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});
export const TrailerItemHover = styled('div')({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 1,
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'all .5s',
});

export const TrailerItemIndex = styled(Typography)({
  position: 'absolute',
  left: theme.spacing(2),
  top: theme.spacing(1),
  zIndex: 2,
  pointerEvents: 'none',
  color: '#fff',
});
