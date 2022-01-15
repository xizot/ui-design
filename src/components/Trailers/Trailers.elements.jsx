import { styled } from '@mui/material';

export const ReactPlayerWrapper = styled('div')({
  width: '60rem',
  maxWidth: '100%',
});
export const ReactPlayerContent = styled('div')({
  position: 'relative',
  paddingTop: '56.25%',
  '& .react-player ': {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
