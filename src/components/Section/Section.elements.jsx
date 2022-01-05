import { Container, styled } from "@mui/material";
import { theme } from "../../GlobalMUI";

export const SectionWrapper = styled(Container)({
  position: "relative",
  marginBottom: theme.spacing(6),
  boxShadow: theme.shadows[3],
  padding: theme.spacing(3),
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
    maxWidth: `calc(100% - ${theme.spacing(4)})`,
  },
});
