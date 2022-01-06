import { IconButton, styled, Typography } from "@mui/material";
import { theme } from "../../GlobalMUI";

export const SliderNav = styled(IconButton)((props) => ({
  position: "absolute",
  left: props.prev ? "-20px" : "auto",
  right: props.next ? "-20px" : "auto",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  background: theme.palette.primary.main + "!important",
  transition: "all .5s",
  "&:hover": {
    opacity: 0.7,
  },
  [theme.breakpoints.down("md")]: {
    width: 36,
    height: 36,
    left: props.prev ? "-15px" : "auto",
    right: props.next ? "-15px" : "auto",
  },
}));
