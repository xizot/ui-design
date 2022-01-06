import { createTheme, Skeleton, styled } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0a1929",
    },
  },
  breakpoints: {
    values: {
      xs: 450,
      sm: 768,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const defaultPadding = theme.spacing(1);
export const defaultColor = "#ddd";
export const SkeletonImage = styled(Skeleton)({
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
});

export const defaultSectionMargin = theme.spacing(8);
export const defaultSectionMarginMobile = theme.spacing(4);
