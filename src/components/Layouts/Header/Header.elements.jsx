import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "../../../GlobalMUI";
export const ButtonLogin = styled(Link)({
  padding: "5px 15px",
  borderRadius: 999,
  color: theme.palette.primary.main,
  background: "#fff",
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 600,
  transition: "all .5s",
  "&:hover": {
    opacity: 0.7,
  },
});
