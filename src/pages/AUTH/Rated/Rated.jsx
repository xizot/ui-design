import React, { useState, useCallback, useEffect } from 'react';
import {
  Container,
  styled,
  Grid,
  Pagination,
  Box,
  Skeleton,
} from '@mui/material';

import {
  defaultSectionMargin,
  defaultSectionMarginMobile,
  theme,
} from '../../../GlobalMUI';
import { PaginationWapper } from '../../MovieDetails/MovieDetails.elements';
import { useSelector } from 'react-redux';
import { data } from '../../../ultis';
import MovieRatedItem from '../../../components/MovieRatedItem/MovieRatedItem';

export const RatedSearchWrapper = styled(Container)({
  margin: `0 auto ${defaultSectionMargin}`,
  [theme.breakpoints.down('sm')]: {
    margin: `0 auto ${defaultSectionMarginMobile}`,
  },
});

function Rated() {
  const [loading, setLoading] = useState(true);
  const [combineData, setCombineData] = useState([]);
  const rated = useSelector((state) => state.rated.data);

  const fetchDataMovie = useCallback((rated, data) => {
    if (rated.length > 0) {
      const combine = rated.reduce((previousValue, currentValue) => {
        const find = data.find((f) => +f.id === +currentValue.id);
        return [...previousValue, { ...find, ...currentValue }];
      }, []);
      setLoading(false);
      setCombineData(combine);
    }
  }, []);

  useEffect(() => {
    fetchDataMovie(rated, data);
  }, [fetchDataMovie, rated]);

  //fake loading
  useEffect(() => {
    setLoading(true);
    var timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container style={{ minHeight: '80vh' }}>
      <Grid container spacing={3}>
        {loading
          ? [0, 0, 0, 0, 0, 0, 0, 0].map((item, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <MovieRatedItem
                  loading={loading ? 1 : 0}
                  imgSrc={item.backdrop_path}
                  id={item.id}
                  title={item.title}
                  score={item.score}
                  comment={item.comment}
                />
              </Grid>
            ))
          : combineData.map((item, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <MovieRatedItem
                  loading={loading ? 1 : 0}
                  imgSrc={item.backdrop_path}
                  id={item.id}
                  title={item.title}
                  score={item.score}
                  comment={item.comment}
                />
              </Grid>
            ))}
      </Grid>
      {!loading && (
        <Box
          sx={{
            margin: {
              xs: defaultSectionMarginMobile,
              md: defaultSectionMargin,
            },
          }}>
          <PaginationWapper>
            <Pagination count={1} shape="rounded" color="primary" />
          </PaginationWapper>
        </Box>
      )}
    </Container>
  );
}

export default Rated;
