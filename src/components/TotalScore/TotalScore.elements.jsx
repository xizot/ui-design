import { styled } from '@mui/material';
import { theme } from '../../GlobalMUI';

export const TotalScoreWrapper = styled('div')({
  maxWidth: 220,
  marginTop: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(1),
  },
});
export const TotalScoreBox = styled('div')({
  textAlign: 'center',
  border: '1px solid #333',
  padding: theme.spacing(4),
  marginTop: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
});
export const TotalScoreTop = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
