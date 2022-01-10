import { styled } from '@mui/material';
import { theme } from '../../GlobalMUI';

export const MovieInfoItemWrapper = styled('div')({
  flexWrap: 'wrap',
  display: 'flex',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
});
