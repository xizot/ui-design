import { styled } from '@mui/material';
import { Box } from '@mui/system';
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

export const ModalConfirmWrapper = styled('div')({
  width: 450,
  borderRadius: theme.shape.borderRadius,
  background: '#fff',
  padding: theme.spacing(5, 3),
  boxShadow: 24,
  maxWidth: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: defaultPadding,
  },
});
export const ModalConfirmActions = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});
