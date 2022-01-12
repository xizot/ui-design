import { Button, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../GlobalMUI";
import { BoxLoginWrapper } from "./BoxLogin.elements";

function BoxLogin() {
  return (
    <BoxLoginWrapper>
      <Typography
        sx={{ marginBottom: theme.spacing(0.5), textAlign: "center" }}
        variant='body1'
      >
        Bạn chưa đăng nhập
      </Typography>
      <Typography
        sx={{ marginBottom: theme.spacing(2), textAlign: "center" }}
        variant='body1'
      >
        Hãy đăng nhập để gửi đánh giá nhé
      </Typography>
      <Button
        variant='contained'
        color='primary'
        className='p-reviews__login__button c-btn c-btn--primary'
      >
        Đăng nhập
      </Button>
    </BoxLoginWrapper>
  );
}

export default BoxLogin;
