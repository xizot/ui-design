import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import MovieItem from '../../components/MovieItem/MovieItem';
import { search } from './Search.data.js';
import {
  defaultSectionMargin,
  defaultSectionMarginMobile,
} from '../../GlobalMUI';
import { PaginationWapper } from '../MovieDetails/MovieDetails.elements';
import { useLocation } from 'react-router';
function Search() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const query = decodeURIComponent(location.search.slice(3));
  const searchHandler = useCallback(async (keyword) => {
    try {
      setLoading(true);
      const find = await search(keyword);
      setResults(find);
    } catch (error) {
      alert('Đã có lỗi xảy ra');
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    searchHandler(query);
  }, [query, searchHandler]);

  return (
    <div style={{ minHeight: '80vh' }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            marginBottom: {
              xs: defaultSectionMarginMobile,
              md: defaultSectionMargin,
            },
            textAlign: 'center',
          }}>
          Kết quả liên quan tới: <b>{query}</b>
        </Typography>
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
                <Grid key={i} item xs={12} sm={6} md={3} lg={2}>
                  <MovieItem itemslider={0} size="small" loading={1} />
                </Grid>
              ))
            : results.length > 0 &&
              results.map((movie, i) => (
                <Grid key={i} item xs={12} sm={6} md={3} lg={2}>
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

export default Search;
