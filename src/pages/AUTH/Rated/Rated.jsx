import React, { useState, useCallback, useEffect } from 'react';
import {
  Container,
  styled,
} from '@mui/material';
import {
  defaultSectionMargin,
  defaultSectionMarginMobile,
  theme,
} from '../../../GlobalMUI';
import {
  listMovies,
} from './Rated.data';
import MovieItemRated from '../../../components/MovieItem/MovieItemRated'

export const RatedSearchWrapper = styled(Container)({
  margin: `0 auto ${defaultSectionMargin}`,
  [theme.breakpoints.down('sm')]: {
    margin: `0 auto ${defaultSectionMarginMobile}`,
  },
});

function Rated() {
  const [loading, setLoading ] = useState(false)
  const [listMovie, setListMovie ] = useState([])

  const getListNewHandler = useCallback(async () => {
    setLoading(true);
    const fetch = await listMovies();
    setListMovie(fetch);
    setLoading(false);
  }, []);

  useEffect(() => {
    getListNewHandler();
  }, [
    getListNewHandler,
  ]);

  return (
  <RatedSearchWrapper>
    {listMovie.map((item) => (
      <MovieItemRated 
        imgSrc={item.backdrop_path}
        id={item.id}
        title={item.title}
        score={item.vote_average}
      />
    ))}
  </RatedSearchWrapper>
  )}

export default Rated;
