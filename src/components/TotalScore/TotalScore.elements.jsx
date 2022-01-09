import { styled } from '@mui/material';
import { theme } from '../../GlobalMUI';

export const TotalScoreWrapper = styled('div')({
  maxWidth: 250,
  marginTop: theme.spacing(3),
});
export const TotalScoreBox = styled('div')({
  textAlign: 'center',
  border: '1px solid #ddd',
  padding: theme.spacing(2),
  marginTop: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
});
export const TotalScoreTop = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
