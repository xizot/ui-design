import React, { useState } from "react";
import { Container, FormControl, FormHelperText, OutlinedInput, Checkbox, Button,
InputAdornment, TextField, Typography,IconButton, styled } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const image = require('../../background-login.png')

export const LoginContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: '85px 0',
  minWidth: '100%',
  backgroundImage: `url(${image})`
})
export const LoginForm = styled(FormControl)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#FFFFFF",
  width: '400px',
  padding: '20px 0',
  '.text-field-form': {
    paddingBottom: '25px' 
  },
  '.checkbox': {
    margin: 0
  },
  '.forgot-password': {
    alignSelf: 'center',
    position: 'absolute',
    right: 0,
    marginRight: '21px',
    color: '#000000',
    textDecoration: 'underline',
  },
  '.login-button': {
    background: '#112D4E',
    color: '#fff',
    fontSize: '16px',
    textAlign: 'center',
    width: '100%',
    border: '4px'
  }
})
function Login() {
  const [information, setInformation] = useState({
    email:'',
    password:'',
    showPassword: false
  })

  const handleChange = (prop) => (event) => {
    setInformation({ ...information, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setInformation({
      ...information,
      showPassword: !information.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlerOnSubmit = () => {
    window.location.href = '/'
  }

  return (
  <LoginContainer>
    <LoginForm onSubmit={handlerOnSubmit}>
      <div style={{ padding : '20px'}}>
        <Typography variant='h4' style={{ color: "#000", fontWeight: " bold" }}>ĐĂNG NHẬP</Typography>
        <div style={{ display: "flex" }}>
          <Typography variant='h8' style={{ color: "#9E9E9E",}}>Chưa có tài khoản? &nbsp;</Typography>
          <a style={{color: "#112D4E", textDecoration: "underline"}} href='/register'>Đăng kí</a>
        </div>
      </div>
      <div style={{padding: '25px', width: '100%'}}>
        <TextField className="text-field-form" fullWidth placeholder="Email" name="email"  onChange={handleChange('email')}></TextField>
        <OutlinedInput
          fullWidth placeholder="Mật khẩu" 
          name="password" 
          type={information.showPassword ? 'text' : 'password'}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                style={{height: '95%'}}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {information.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          />
          <div style={{display: 'flex', textAlign: 'center', paddingBottom: '10px'}}>
            <Checkbox className="checkbox"/>
            <p style={{fontWeight: 'bold', fontStyle: '12px'}}>GHI NHỚ</p>
            <a className="forgot-password" href='/forgot'>QUÊN TÀI KHOẢN</a>
          </div>
          <Button className="login-button">ĐĂNG NHẬP</Button>
      </div>
    </LoginForm>
  </LoginContainer>
  )
}

export default Login;
