import { styled } from '@mui/material';

export const PaginationWapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const ImageOverlay = styled('img')({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  opacity: 0.3,
  filter: 'blur(3px)',
  zIndex: -1,
  objectFit: 'cover',
});
