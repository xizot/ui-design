import {
  AppBar,
  Avatar,
  Button,
  Container,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Tooltip,
  Typography,
  alpha,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import { ButtonLogin } from './Header.elements';
import {
  defaultSectionMargin,
  defaultSectionMarginMobile,
} from '../../../GlobalMUI';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const pages = [
  {
    title: 'Phim thịnh hành',
    path: '/browse/popular',
  },
  {
    title: 'Mới & phổ biến',
    path: '/browse/lasted',
  },
  {
    title: 'Danh sách của tôi',
    path: '/rated',
  },
];
const settings = [
  {
    title: 'Trang cá nhân',
    path: '/profile',
  },
  {
    title: 'Đăng xuất',
    path: '/logout',
  },
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const Header = () => {
  const history = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const queryOnKeyPress = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      history(`/search?q=${query}`);
    }
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e, path) => {
    setAnchorElNav(null);
    history(path);
  };

  const handleCloseUserMenu = (e, path) => {
    setAnchorElUser(null);
    history(path);
  };

  return (
    <AppBar
      position="static"
      sx={{
        marginBottom: {
          xs: defaultSectionMarginMobile,
          md: defaultSectionMargin,
        },
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />

          <Box
            sx={{
              flexGrow: { xs: 'auto', md: 1 },
              display: { xs: 'flex', md: 'none' },
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <box-icon name="menu" color="#fff"></box-icon>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              <MenuItem>
                <Search style={{ border: '1px solid #ddd' }}>
                  <SearchIconWrapper>
                    <box-icon name="search-alt-2"></box-icon>
                  </SearchIconWrapper>
                  <StyledInputBase
                    value={query}
                    onKeyPress={queryOnKeyPress}
                    onChange={queryChangeHandler}
                    placeholder="Tìm kiếm..."
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </MenuItem>
              {pages.map((page, i) => (
                <MenuItem
                  key={i}
                  onClick={(e) => handleCloseNavMenu(e, page.path)}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to="/">
            <Typography
              variant="h6"
              style={{ color: '#fff' }}
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              KAMFLEX
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, i) => (
              <Button
                key={i}
                onClick={(e) => handleCloseNavMenu(e, page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Search style={{ marginRight: 20, background: '#fff' }}>
              <SearchIconWrapper>
                <box-icon name="search-alt-2" color="#333"></box-icon>
              </SearchIconWrapper>
              <StyledInputBase
                onKeyPress={queryOnKeyPress}
                value={query}
                onChange={queryChangeHandler}
                placeholder="Tìm kiếm..."
                inputProps={{ 'aria-label': 'search' }}
                style={{ color: '#333' }}
              />
            </Search>
          </Box>

          <Box sx={{ flexGrow: 0, marginLeft: { xs: 'auto', md: '0' } }}>
            {isAuthenticated ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={() => setAnchorElUser(null)}>
                  {settings.map((setting, i) => (
                    <MenuItem
                      key={i}
                      onClick={(e) => handleCloseUserMenu(e, setting.path)}>
                      <Typography textAlign="center">
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <ButtonLogin to="/login">Đăng nhập</ButtonLogin>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
