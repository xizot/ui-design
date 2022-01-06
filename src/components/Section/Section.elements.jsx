import { Container, styled, Typography } from "@mui/material";
import {
  defaultSectionMargin,
  defaultSectionMarginMobile,
  theme,
} from "../../GlobalMUI";

export const SectionWrapper = styled(Container)({
  marginBottom: defaultSectionMargin,
  [theme.breakpoints.down("lg")]: {
    marginBottom: defaultSectionMarginMobile,
  },
  [theme.breakpoints.down("md")]: {},
});
export const SectionTitle = styled(Typography)({
  fontWeight: "bolder",
  fontSize: 24,
  textTransform: "uppercase",
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
});

export const SectionContent = styled("div")({
  padding: theme.spacing(3),
  position: "relative",
  boxShadow: theme.shadows[3],
});
