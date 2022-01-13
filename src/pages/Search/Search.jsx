import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import React from "react";
import MovieItem from "../../components/MovieItem/MovieItem";
import {
  defaultSectionMargin,
  defaultSectionMarginMobile,
} from "../../GlobalMUI";
import { PaginationWapper } from "../MovieDetails/MovieDetails.elements";

function Search() {
  return (
    <div>
      <Container>
        <Typography
          variant='h4'
          sx={{
            marginBottom: {
              xs: defaultSectionMarginMobile,
              md: defaultSectionMargin,
            },
            textAlign: "center",
          }}
        >
          Kết quả liên quan tới:{" "}
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{
            marginBottom: {
              xs: defaultSectionMarginMobile,
              md: defaultSectionMargin,
            },
          }}
        >
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, i) => (
            <Grid key={i} item xs={12} sm={6} md={3} lg={2}>
              <MovieItem itemslider={0} size='small' loading={1} />
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            marginBottom: {
              xs: defaultSectionMarginMobile,
              md: defaultSectionMargin,
            },
          }}
        >
          <PaginationWapper>
            <Pagination count={10} shape='rounded' color='primary' />
          </PaginationWapper>
        </Box>
      </Container>
    </div>
  );
}

export default Search;
