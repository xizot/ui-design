import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  FormHelperText,
} from '@mui/material';
import React, { useState } from 'react';
import {
  BackgroundImage,
  BackgroundOverlay,
  FormWrapper,
  FromGroup,
  FromSubtitle,
  FromTitle,
  LinkElement,
} from '../../GlobalElements';
import { theme } from '../../GlobalMUI';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LoginContainer, LoginWrapper } from '../Login/Login.elements';

const image = require('../../background-login.png');

const schema = yup
  .object({
    fullname: yup
      .string()
      .min(5, 'Tên tối thiểu 5 kí tự')
      .required('Vui lòng nhập họ tên của bạn'),
    email: yup
      .string()
      .email('Địa chỉ email không hợp lệ')
      .required('Vui lòng nhập email'),
    password: yup
      .string()
      .min(6, 'Mật khẩu tối thiểu 6 kí tự')
      .required('Vui lòng nhập mật khẩu'),
  })
  .required();

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const mouseDownHandler = (event) => {
    event.preventDefault();
  };
  const showPasswordHandler = () => {
    setShowPassword((prevState) => !prevState);
  };
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <BackgroundImage image={image}>
        <BackgroundOverlay />
      </BackgroundImage>
      <LoginWrapper>
        <LoginContainer>
          <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <FromTitle>Đăng Kí</FromTitle>
            <FromSubtitle>
              Bạn đã có tài khoản?
              <LinkElement
                color={theme.palette.primary.main}
                to="/login"
                style={{ fontSize: 16 }}>
                {' '}
                Đăng nhập
              </LinkElement>
            </FromSubtitle>
            <FromGroup fullWidth margin="normal">
              <Controller
                name="fullname"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={!!errors.fullname}
                    label="Tên của bạn"
                    helperText={errors.fullname ? errors.fullname.message : ''}
                    fullWidth
                    autoFocus
                  />
                )}></Controller>
            </FromGroup>
            <FromGroup fullWidth margin="normal">
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={!!errors.email}
                    type="email"
                    label="Email"
                    helperText={errors.email ? errors.email.message : ''}
                    fullWidth
                  />
                )}></Controller>
            </FromGroup>
            <Box marginBottom={3}>
              <FromGroup fullWidth margin="normal" error={!!errors.password}>
                <InputLabel htmlFor="password">Mật khẩu</InputLabel>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <OutlinedInput
                      {...field}
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={showPasswordHandler}
                            onMouseDown={mouseDownHandler}
                            edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  )}></Controller>
                <FormHelperText color="secondary">
                  {errors.password?.message}
                </FormHelperText>
              </FromGroup>
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={
                !!errors.email || !!errors.password || !!errors.fullname
              }>
              Đăng Kí
            </Button>
          </FormWrapper>
        </LoginContainer>
      </LoginWrapper>
    </div>
  );
}

export default Register;
