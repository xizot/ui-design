import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to='/'>
      <Typography
        variant='h6'
        noWrap
        style={{ color: "#fff" }}
        component='div'
        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
      >
        KAMFLEX
      </Typography>
    </Link>
  );
}

export default Logo;
