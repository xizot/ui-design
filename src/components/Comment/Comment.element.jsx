import { styled } from '@mui/material';
import { defaultPadding, theme } from '../../GlobalMUI';

export const CommentContainer = styled('div')({
  padding: defaultPadding,
  marginBottom: defaultPadding,
  boxShadow: theme.shadows[4],
  borderRadius: theme.shape.borderRadius,
});

export const CommentActions = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(1),
});
