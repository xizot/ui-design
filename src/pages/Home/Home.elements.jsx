import { Container, styled, TextField } from '@mui/material';
import {
  defaultSectionMargin,
  defaultSectionMarginMobile,
  theme,
} from '../../GlobalMUI';

export const HomeSearchWrapper = styled(Container)({
  margin: `0 auto ${defaultSectionMargin}`,
  [theme.breakpoints.down('sm')]: {
    margin: `0 auto ${defaultSectionMarginMobile}`,
  },
});

export const HomeSearchInput = styled(TextField)({
  borderRadius: 9999,
  '& fieldset': {
    borderRadius: 9999,
  },
});
