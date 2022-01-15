import React, { useState, useCallback, useEffect } from 'react';
import {
  Container,
  styled,
  Grid,
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
  const [listMovieLeft, setListMovieLeft] = useState([])
  const [listMovieRight, setListMovieRight] = useState([])

  const getListNewHandler = useCallback(async () => {
    setLoading(true);
    const fetch = await listMovies();
    setListMovie(fetch);
    const listRight = []
    const listLeft = []
    fetch.forEach((element, index) => {
      if (index % 2 === 0) {
        listRight.push(element)
      }else {
         listLeft.push(element)
      }
    })
    setListMovieLeft(listLeft)
    setListMovieRight(listRight)
    setLoading(false);
  }, []);

  useEffect(() => {
    getListNewHandler();
  }, [
    getListNewHandler,
  ]);

  return (
  <RatedSearchWrapper>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        {listMovieLeft.map((item) => (
          <MovieItemRated 
            imgSrc={item.backdrop_path}
            id={item.id}
            title={item.title}
            score={item.vote_average}
          />
        ))}
      </Grid>
      <Grid item xs={6}>
      {listMovieRight.map((item) => (
          <MovieItemRated 
            imgSrc={item.backdrop_path}
            id={item.id}
            title={item.title}
            score={item.vote_average}
          />
        ))}
      </Grid>   
    </Grid>
  </RatedSearchWrapper>
  )}

export default Rated;
