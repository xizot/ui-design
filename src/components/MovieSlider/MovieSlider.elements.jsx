import { IconButton, styled } from '@mui/material';
import { theme } from '../../GlobalMUI';

export const SliderNav = styled(IconButton)((props) => ({
  position: 'absolute',
  left: props.prev ? props.prev : 'auto',
  right: props.next ? props.next : 'auto',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  background: theme.palette.primary.main + '!important',
  transition: 'all .5s',
  '&:hover': {
    opacity: 0.7,
  },
  [theme.breakpoints.down('md')]: {
    width: 36,
    height: 36,
    left: props.prevmb ? props.prevmb : 'auto',
    right: props.nextmb ? props.nextmb : 'auto',
  },
}));
