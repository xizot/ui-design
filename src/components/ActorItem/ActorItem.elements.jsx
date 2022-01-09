import { styled, Typography } from '@mui/material';
import { theme } from '../../GlobalMUI';

export const ActorItemWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(0, 1),
  width: 150,
  maxWidth: '100%',
  height: '100%',
});
export const ActorItemContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
});

export const ActorItemName = styled(Typography)({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
  fontWeight: 600,
  wordBreak: 'break-word',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  lineHeight: 1,
});
