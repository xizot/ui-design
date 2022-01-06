import { Container, Grid, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "../../../GlobalMUI";

export const FooterWrapper = styled("footer")({
  background: theme.palette.primary.main,
  padding: theme.spacing(6, 0),
});

export const FooterContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 40,
  [theme.breakpoints.down("sm")]: {
    display: "block",
    textAlign: "center",
  },
});

export const FooterNavigation = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: theme.spacing(-5),
  [theme.breakpoints.down("sm")]: {
    display: "block",
    marginTop: theme.spacing(4),
  },
});

export const FooterNavigationItem = styled(Link)({
  color: "white",
  marginLeft: theme.spacing(5),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    display: "block",
    textAlign: "center",
  },
});

export const FooterBottom = styled(Grid)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between",
});

export const FooterSocials = styled("div")({
  display: "flex",
  alignItems: "center",
  color: "#ff",
  marginLeft: -20,
  justifyContent: "center",
  "& a": {
    marginLeft: 20,
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(4),
  },
});

export const BottomIcon = styled("box-icon")({
  fontSize: 60,
});
