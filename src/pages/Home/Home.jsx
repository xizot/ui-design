import { Autocomplete, Button, Skeleton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState, useCallback } from 'react';
import CategoryCarousel from '../../components/CategoryCarousel/CategoryCarousel';
import Mainvisual from '../../components/Mainvisual/Mainvisual';
import MovieSlider from '../../components/MovieSlider/MovieSlider';
import { theme } from '../../GlobalMUI';
import { data } from '../../ultis';
import {
  // listBadMovies,
  listBestMovies,
  listNewMovies,
  listPopular,
  listManyReviews,
} from './Home.data';
import { HomeSearchInput, HomeSearchWrapper } from './Home.elements';
import { useNavigate } from 'react-router-dom';

function Home() {
  const history = useNavigate();

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState({
    popular: true,
    new: true,
    best: true,
    bad: true,
    manyReviews: true,
  });
  const [movies, setMovies] = useState({
    popular: [],
    bad: [],
    good: [],
    new: [],
    manyReviews: [],
  });

  const queryOnKeyPress = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      history(`/search?q=${query}`);
    }
  };
  const queryChangeHandler = (e, value) => {
    setQuery(value);
  };
  const getListPopularHandler = useCallback(async () => {
    setLoading((prevState) => ({ ...prevState, popular: true }));
    const fetch = await listPopular();
    setMovies((prevState) => ({ ...prevState, popular: fetch }));
    setLoading((prevState) => ({ ...prevState, popular: false }));
  }, []);
  // const getListBadHandler = useCallback(async () => {
  //   setLoading((prevState) => ({ ...prevState, bad: true }));
  //   const fetch = await listBadMovies();
  //   setMovies((prevState) => ({ ...prevState, bad: fetch }));
  //   setLoading((prevState) => ({ ...prevState, bad: false }));
  // }, []);
  const getListManyReviewsHandler = useCallback(async () => {
    setLoading((prevState) => ({ ...prevState, manyReviews: true }));
    const fetch = await listManyReviews();
    setMovies((prevState) => ({ ...prevState, manyReviews: fetch }));
    setLoading((prevState) => ({ ...prevState, manyReviews: false }));
  }, []);
  const getListNewHandler = useCallback(async () => {
    setLoading((prevState) => ({ ...prevState, new: true }));
    const fetch = await listNewMovies();
    setMovies((prevState) => ({ ...prevState, new: fetch }));
    setLoading((prevState) => ({ ...prevState, new: false }));
  }, []);
  const getListBestHandler = useCallback(async () => {
    setLoading((prevState) => ({ ...prevState, best: true }));
    const fetch = await listBestMovies();
    setMovies((prevState) => ({ ...prevState, best: fetch }));
    setLoading((prevState) => ({ ...prevState, best: false }));
  }, []);

  const btnSearchClickHandler = (e) => {
    e.preventDefault();
    if (query.length) {
      history(`/search?q=${query}`);
    }
  };
  useEffect(() => {
    getListPopularHandler();
    getListNewHandler();
    getListBestHandler();
    //getListBadHandler();
    getListManyReviewsHandler();
  }, [
    getListPopularHandler,
    getListNewHandler,
    getListBestHandler,
    getListManyReviewsHandler,
  ]);
  return (
    <div>
      <Mainvisual loading={loading.popular} list={movies.popular} />
      <HomeSearchWrapper>
        {loading.popular ? (
          <Skeleton
            variant="text"
            height={50}
            sx={{
              minWidth: 250,
              width: '40%',
              margin: '0 auto',
              marginBottom: theme.spacing(2),
            }}
          />
        ) : (
          <Typography
            variant="h5"
            textAlign="center"
            sx={{
              marginBottom: theme.spacing(2),
              fontSize: { xs: 18, md: 24 },
            }}>
            T??m ki???m m???t b??? phim b???n mu???n
          </Typography>
        )}
        <Box
          maxWidth="40rem"
          margin="0 auto"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {loading.popular ? (
            <>
              <Skeleton
                variant="rectangular"
                width={120}
                height={40}
                sx={{
                  flex: 1,
                  marginRight: {
                    xs: theme.spacing(1),
                    md: theme.spacing(2),
                    borderRadius: 9999,
                  },
                }}
              />
              <Skeleton
                variant="rectangular"
                width={120}
                height={40}
                sx={{ borderRadius: 9999 }}
              />
            </>
          ) : (
            <>
              <Autocomplete
                freeSolo
                disableClearable
                value={query}
                onChange={queryChangeHandler}
                onKeyPress={queryOnKeyPress}
                options={data.map((option) => option.title)}
                size="small"
                sx={{
                  flex: 1,
                  marginRight: { xs: theme.spacing(1), md: theme.spacing(2) },
                }}
                renderInput={(params) => (
                  <HomeSearchInput
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ borderRadius: 9999 }}
                onClick={btnSearchClickHandler}>
                T??m ki???m
              </Button>
            </>
          )}
        </Box>
      </HomeSearchWrapper>
      <CategoryCarousel />
      <MovieSlider
        title="TOP PHIM ????NH GI?? CAO"
        movies={movies.best}
        loading={loading.best ? 1 : 0}
      />
      <MovieSlider
        title="TOP PHIM NHI???U NG?????I ????NH GI??"
        movies={movies.manyReviews}
        loading={loading.manyReviews ? 1 : 0}
      />

      <MovieSlider
        title="TOP PHIM M???I NH???t"
        movies={movies.new}
        loading={loading.new ? 1 : 0}
      />
    </div>
  );
}

export default Home;
