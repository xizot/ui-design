import { styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { defaultPadding, defaultPaddingMobile, theme } from "../../GlobalMUI";

export const MovieHover = styled(Link)({
  position: "absolute",
  left: 0,
  top: 0,
  background: "rgba(0,0,0,.4)",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all .5s",
  opacity: 0,
  pointerEvents: "none",
});

export const MovieWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  textDecoration: "none",
  color: "#000",
  padding: theme.spacing(0, 1.5),
  transition: "all .5s",
  position: "relative",
  "& img": {
    transition: "all .5s",
  },
  "&:hover .on-hover": {
    opacity: 1,
    pointerEvents: "all",
  },
  "&:hover img": {
    transform: "scale(1.2)",
  },
  "&:hover .movie-title": {
    textDecoration: "underline",
  },
});

export const MovieImageWrapper = styled("div")({
  position: "relative",
  borderRadius: "5px 5px 0 0",
  overflow: "hidden",
  paddingTop: "calc(3/2 * 100%)",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "calc(3/2 * 75%)",
  },
});

export const MovieImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  left: 0,
  top: 0,
});

export const MovieContent = styled(Link)({
  padding: defaultPadding,
  paddingBottom: 0,
  flex: 1,
  display: "flex",
  color: "#000",
  [theme.breakpoints.down("sm")]: {
    padding: defaultPaddingMobile,
  },
});

export const MovieContentText = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flex: 1,
});

export const MovieScoreWrapper = styled("div")({
  width: 36,
  height: 36,
  marginLeft: theme.spacing(1),
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

export const MovieScore = styled(Typography)({
  fontWeight: "bolder",
  fontSize: 16,
});

export const MovieTitle = styled(Typography)({
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 1.5,
  wordBreak: "break-word",
  marginBottom: theme.spacing(1),
  display: "-webkit-box",
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

export const MovieTimer = styled(Typography)({
  fontSize: 12,
});
