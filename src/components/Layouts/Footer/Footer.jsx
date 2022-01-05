import React from "react";
import {
  FooterContainer,
  FooterNavigation,
  FooterNavigationItem,
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
        <FooterNavigation>
          {pages.map((page, i) => (
            <FooterNavigationItem to='/'> {page}</FooterNavigationItem>
          ))}
        </FooterNavigation>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;
