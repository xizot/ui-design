import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  BottomIcon,
  FooterBottom,
  FooterContainer,
  FooterNavigation,
  FooterNavigationItem,
  FooterSocials,
  FooterWrapper,
} from './Footer.elements';
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
    title: 'Phim đánh giá cao',
    path: '/browse/high-rate',
  },
  {
    title: 'Phim đánh giá thấp',
    path: '/browse/low-rate',
  },
];
function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Link to="/">
          <Typography
            variant="h6"
            noWrap
            style={{ color: '#fff' }}
            component="div">
            KAMFLEX
          </Typography>
        </Link>
        <FooterNavigation>
          {pages.map((page, i) => (
            <FooterNavigationItem key={i} to={page.path}>
              {page.title}
            </FooterNavigationItem>
          ))}
        </FooterNavigation>
        <FooterBottom container>
          <Grid
            item
            xs={3}
            sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
          <Grid item xs={12} md={3}>
            <FooterSocials>
              <a href="https://www.facebook.com/">
                <BottomIcon
                  color="#fff"
                  size="md"
                  type="logo"
                  name="facebook"
                />
              </a>
              <a href="https://github.com/">
                <BottomIcon color="#fff" size="md" type="logo" name="github" />
              </a>
              <a href="https://www.instagram.com/">
                <BottomIcon
                  color="#fff"
                  size="md"
                  type="logo"
                  name="instagram"
                />
              </a>
            </FooterSocials>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              variant="caption"
              component="p"
              sx={{
                color: '#fff',
                textAlign: { xs: 'center', md: 'right' },
                marginTop: { xs: '10px', md: 0 },
              }}>
              © 2021 KamFlex. All rights reversed
            </Typography>
          </Grid>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;
