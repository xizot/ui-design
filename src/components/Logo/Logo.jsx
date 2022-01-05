import { Link, Typography } from "@mui/material";
import React from "react";

function Logo() {
  return (
    <div>
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
    </div>
  );
}

export default Logo;
