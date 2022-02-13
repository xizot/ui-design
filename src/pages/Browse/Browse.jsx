import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import MovieItem from '../../components/MovieItem/MovieItem';
import { useParams } from 'react-router';
import {
  defaultSectionMargin,
  defaultSectionMarginMobile,
} from '../../GlobalMUI';
import { PaginationWapper } from '../MovieDetails/MovieDetails.elements';
import {
  BrowseHigh,
  BrowseLow,
  BrowseNews,
  BrowsePopulars,
} from './Browse.data';

function Browse() {
  const { slag } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const getListPopularHandler = useCallback(async (type) => {
    setLoading(true);
    let fetch = await BrowsePopulars();
    if (type === 'lasted') {
      fetch = await BrowseNews();
    } else if (type === 'high-rate') {
      fetch = await BrowseHigh();
    } else if (type === 'low-rate') {
      fetch = await BrowseLow();
    }
    setResults(fetch);
    setLoading(false);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    getListPopularHandler(slag);
  }, [slag, getListPopularHandler]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            marginBottom: {
              xs: defaultSectionMarginMobile,
              md: defaultSectionMargin,
            },
          }}>
          {loading
            ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, i) => (
                <Grid key={i} item xs={6} sm={4} md={3} lg={2}>
                  <MovieItem itemslider={0} size="small" loading={1} />
                </Grid>
              ))
            : results.length > 0 &&
              results.map((movie, i) => (
                <Grid key={i} item xs={6} sm={4} md={3} lg={2}>
                  <MovieItem
                    key={i}
                    id={movie.id}
                    title={movie.title}
                    imgSrc={movie.poster_path}
                    score={movie.vote_average}
                    releasedAt={movie.release_date}
                    itemslider={0}
                    size="small"
                  />
                </Grid>
              ))}
        </Grid>
        {!loading ? (
          results.length > 0 ? (
            <Box
              sx={{
                marginBottom: {
                  xs: defaultSectionMarginMobile,
                  md: defaultSectionMargin,
                },
              }}>
              <PaginationWapper>
                <Pagination count={1} shape="rounded" color="primary" />
              </PaginationWapper>
            </Box>
          ) : (
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                color: 'red',
              }}>
              Không có bộ phim liên quan tới từ khóa tìm kiếm.
            </Typography>
          )
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
}

export default Browse;
