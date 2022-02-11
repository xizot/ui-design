import { InputLabel, NativeSelect, styled } from '@mui/material';
import { theme } from '../../GlobalMUI';

export const SelectWrapper = styled(NativeSelect)({
  background: theme.palette.primary.main,
  color: '#fff',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  '& select': {
    padding: theme.spacing(1, 2),
  },
  '& option': {
    padding: theme.spacing(5, 2) + '!important',
    color: '#333',
  },
  '& svg': {
    color: '#fff !important',
  },
});

export const SelectLabel = styled(InputLabel)({
  fontWeight: 600,
  color: '#000',
});
