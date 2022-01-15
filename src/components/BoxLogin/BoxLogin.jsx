import { Button, Typography } from '@mui/material';
import React from 'react';
import { theme } from '../../GlobalMUI';
import { BoxLoginWrapper } from './BoxLogin.elements';
import { Link } from 'react-router-dom';

function BoxLogin({ id }) {
  return (
    <BoxLoginWrapper>
      <Typography
        sx={{ marginBottom: theme.spacing(0.5), textAlign: 'center' }}
        variant="body1">
        Bạn chưa đăng nhập
      </Typography>
      <Typography
        sx={{ marginBottom: theme.spacing(2), textAlign: 'center' }}
        variant="body1">
        Hãy đăng nhập để gửi đánh giá nhé
      </Typography>
      <Link to={`/login?backUrl=/details/${id}`}>
        <Button
          variant="contained"
          color="primary"
          className="p-reviews__login__button c-btn c-btn--primary">
          Đăng nhập
        </Button>
      </Link>
    </BoxLoginWrapper>
  );
}

export default BoxLogin;
