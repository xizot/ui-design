import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";
import {
  BottomIcon,
  FooterBottom,
  FooterContainer,
  FooterNavigation,
  FooterNavigationItem,
  FooterSocials,
  FooterWrapper,
} from "./Footer.elements";
const pages = [
  "Phim thịnh hành",
  "Mới & phổ biến",
  "Phim Đánh Giá Cao",
  "Phim Đánh Giá Thấp",
];
function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Link to='/'>
          <Typography
            variant='h6'
            noWrap
            style={{ color: "#fff" }}
            component='div'
          >
            KAMFLEX
          </Typography>
        </Link>
        <FooterNavigation>
          {pages.map((page, i) => (
            <FooterNavigationItem to='/'> {page}</FooterNavigationItem>
          ))}
        </FooterNavigation>
        <FooterBottom container>
          <Grid
            item
            xs={3}
            sx={{ display: { xs: "none", md: "block" } }}
          ></Grid>
          <Grid item xs={12} md={3}>
            <FooterSocials>
              <Link to='facebook.com'>
                <BottomIcon
                  color='#fff'
                  size='md'
                  type='logo'
                  name='facebook'
                />
              </Link>
              <Link to='github.com'>
                <BottomIcon color='#fff' size='md' type='logo' name='github' />
              </Link>
              <Link to='instagram.com'>
                <BottomIcon
                  color='#fff'
                  size='md'
                  type='logo'
                  name='instagram'
                />
              </Link>
            </FooterSocials>
          </Grid>
          <Grid xs={12} md={3}>
            <Typography
              variant='caption'
              component='p'
              sx={{
                color: "#fff",
                textAlign: { xs: "center", md: "right" },
                marginTop: { xs: "10px", md: 0 },
              }}
            >
              © 2021 KamFlex. All rights reversed
            </Typography>
          </Grid>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;
