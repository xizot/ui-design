import React, { useState, useCallback, useEffect } from 'react';
import { Container, styled, Grid, Pagination, Box } from '@mui/material';
import {
  defaultSectionMargin,
  defaultSectionMarginMobile,
  theme,
} from '../../../GlobalMUI';
import MovieItemRated from '../../../components/MovieItem/MovieItemRated';
import { PaginationWapper } from '../../MovieDetails/MovieDetails.elements';
import { useSelector } from 'react-redux';
import { data } from '../../../ultis';

export const RatedSearchWrapper = styled(Container)({
  margin: `0 auto ${defaultSectionMargin}`,
  [theme.breakpoints.down('sm')]: {
    margin: `0 auto ${defaultSectionMarginMobile}`,
  },
});

function Rated() {
  const [loading, setLoading] = useState(false);
  const [combineData, setCombineData] = useState([]);
  const rated = useSelector((state) => state.rated.data);

  const fetchDataMovie = useCallback((rated, data) => {
    if (rated.length > 0) {
      const combine = rated.reduce((previousValue, currentValue) => {
        const find = data.find((f) => +f.id === +currentValue.id);
        return [...previousValue, { ...find, ...currentValue }];
      }, []);

      setCombineData(combine);
    }
  }, []);

  console.log(combineData);
  useEffect(() => {
    fetchDataMovie(rated, data);
  }, [fetchDataMovie, rated]);

  return (
    <div style={{ minHeight: '80vh' }}>
      <RatedSearchWrapper>
        <Grid container spacing={3}>
          {combineData.map((item, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <MovieItemRated
                imgSrc={item.backdrop_path}
                id={item.id}
                title={item.title}
                score={item.score}
                comment={item.comment}
              />
            </Grid>
          ))}
        </Grid>
      </RatedSearchWrapper>
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
    </div>
  );
}

export default Rated;
