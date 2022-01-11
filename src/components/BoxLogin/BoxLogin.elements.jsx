import { styled } from "@mui/material";
import { defaultPadding, theme } from "../../GlobalMUI";

export const BoxLoginWrapper = styled("div")({
  boxShadow: theme.shadows[4],
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 200,
  marginBottom: defaultPadding,
});
