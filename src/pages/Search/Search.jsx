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
import CustomSelect from '../../components/CustomSelect/CustomSelect';

const filterOptions = [
  {
    label: 'Thời gian',
    value: 'time',
  },
  {
    label: 'Điểm đánh giá',
    value: 'score',
  },
];

const filterOrder = [
  {
    label: 'Tăng dần',
    value: 'asc',
  },
  {
    label: 'Giảm dần',
    value: 'desc',
  },
];

function Search() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderBy, setOrderBy] = useState('time');
  const [type, setType] = useState('desc');
  const location = useLocation();
  const query = decodeURIComponent(location.search.slice(3));

  const searchHandler = useCallback(async (keyword, orderBy, type) => {
    try {
      setLoading(true);
      const find = await search(keyword, orderBy, type);
      setResults(find);
    } catch (error) {
      alert('Đã có lỗi xảy ra');
    }
    setLoading(false);
  }, []);

  const orderByChangeHandler = (e) => {
    setOrderBy(e.target.value);
  };
  const typeChangeHandler = (e) => {
    setType(e.target.value);
  };
  useEffect(() => {
    searchHandler(query, orderBy, type);
  }, [query, orderBy, type, searchHandler]);

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
            fontSize: { xs: 18, md: 22 },
          }}>
          Kết quả liên quan tới: <b>{query}</b>
        </Typography>
        {results.length > 0 && (
          <React.Fragment>
            <Grid container spacing={3} mb={5}>
              <Grid item xs={6} sm={6} md={3} lg={2}>
                <CustomSelect
                  fullWidth
                  label="Tiêu chí"
                  options={filterOptions}
                  defaultValue={orderBy}
                  onChange={(e) => orderByChangeHandler(e)}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={2}>
                <CustomSelect
                  fullWidth
                  label="Sắp theo"
                  options={filterOrder}
                  onChange={(e) => typeChangeHandler(e)}
                  defaultValue={type}
                />
              </Grid>
            </Grid>
          </React.Fragment>
        )}
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
