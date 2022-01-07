import React, { useState } from "react";
import { Container, FormControl, FormHelperText, OutlinedInput, Checkbox, Button,
InputAdornment, TextField, Typography,IconButton, styled } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const image = require('../../background-login.png')

export const RegisterContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: '85px 0',
  minWidth: '100%',
  backgroundImage: `url(${image})`
})
export const RegisterForm = styled(FormControl)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#FFFFFF",
  width: '400px',
  padding: '20px 0',
  '.title': {
    padding: '20px',
    textAlign: 'center',
  },
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
    marginTop: '20px',
    background: '#112D4E',
    color: '#fff',
    fontSize: '16px',
    textAlign: 'center',
    width: '100%',
    height: '50px',
    border: '4px'
  }
})
function Register() {
  const [information, setInformation] = useState({
    name: '',
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
  <RegisterContainer>
    <RegisterForm onSubmit={handlerOnSubmit}>
      <div className='title'>
        <Typography variant='h4' style={{ color: "#000", fontWeight: " bold" }}>ĐĂNG KÍ</Typography>
        <div style={{ display: "flex" }}>
          <Typography variant='h8' style={{ color: "#9E9E9E",}}>Bạn đã có tài khoản? &nbsp;</Typography>
          <a style={{color: "#112D4E", textDecoration: "underline"}} href='/register'>Đăng nhập</a>
        </div>
      </div>
      <div style={{padding: '25px', width: '100%'}}>
      <TextField className="text-field-form" fullWidth placeholder="Tên đầy đủ" name="name"  onChange={handleChange('name')}></TextField>
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
          <Button className="login-button">ĐĂNG KÍ</Button>
      </div>
    </RegisterForm>
  </RegisterContainer>
  )
}

export default Register;
