import { Typography, styled } from '@mui/material';
import { theme } from '../../GlobalMUI';

export const Label = styled(Typography)((props) => ({
  minWidth: props.minWidth ? props.minWidth : 100,
  fontWeight: 600,
  color: theme.palette.primary.main,
}));

export const ModScoreItemWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
});
