import { Container, styled, Typography } from "@mui/material";
import {
  defaultSectionMargin,
  defaultSectionMarginMobile,
  theme,
} from "../../GlobalMUI";

export const SectionWrapper = styled(Container)({
  marginBottom: defaultSectionMargin,
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(2),
    marginBottom: defaultSectionMarginMobile,
    maxWidth: `calc(100% - 40px)`,
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: `calc(100% - ${theme.spacing(4)})`,
  },
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
