import { Autocomplete, Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CategoryCarousel from '../../components/CategoryCarousel/CategoryCarousel';
import Mainvisual from '../../components/Mainvisual/Mainvisual';
import MovieSlider from '../../components/MovieSlider/MovieSlider';
import { theme } from '../../GlobalMUI';
import { movies } from '../../ultis';
import { listBadMovies, listBestMovies, listNewMovies } from './Home.data';
import { HomeSearchInput, HomeSearchWrapper } from './Home.elements';

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    var timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      <Mainvisual />
      <HomeSearchWrapper>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ marginBottom: theme.spacing(2), fontSize: { xs: 18, md: 24 } }}>
          Tìm kiếm một bộ phim bạn muốn
        </Typography>

        <Box
          maxWidth="50rem"
          margin="0 auto"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Autocomplete
            freeSolo
            disableClearable
            options={movies.map((option) => option.title)}
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
            sx={{ borderRadius: 9999 }}>
            Tìm kiếm
          </Button>
        </Box>
      </HomeSearchWrapper>
      <CategoryCarousel />
      <MovieSlider
        title="TOP PHIM MỚI NHẤt"
        movies={listNewMovies}
        loading={loading}
      />
      <MovieSlider
        title="TOP PHIM ĐÁNH GIÁ CAO"
        movies={listBestMovies}
        loading={loading}
      />
      <MovieSlider
        title="TOP PHIM KHÔNG NÊN XEM"
        movies={listBadMovies}
        loading={loading}
      />
    </div>
  );
}

export default Home;
