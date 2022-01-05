import { Container, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "../../../GlobalMUI";

export const FooterWrapper = styled("footer")({
  background: theme.palette.primary.main,
  padding: theme.spacing(6, 0),
});

export const FooterContainer = styled(Container)({});

export const FooterNavigation = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: theme.spacing(-5),
});

export const FooterNavigationItem = styled(Link)({
  color: "white",
  marginLeft: theme.spacing(5),
});
