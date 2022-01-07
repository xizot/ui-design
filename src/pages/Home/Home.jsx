import React, { useEffect, useState } from "react";
import Mainvisual from "../../components/Mainvisual/Mainvisual";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { listBadMovies, listBestMovies, listNewMovies } from "./Home.data";
import {
  defaultSectionMargin,
  defaultSectionMarginMobile,
} from "../../GlobalMUI";
import { styled } from "@mui/material";

export const HomeContainer = styled('div')(({ theme }) => ({
  marginTop: defaultSectionMargin,
  [theme.breakpoints.down("lg")]: {
    marginTop: defaultSectionMarginMobile,
  },
}));

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    var timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <HomeContainer>
      <Mainvisual/>
      <MovieSlider
        title='TOP PHIM MỚI NHẤt'
        movies={listNewMovies}
        loading={loading}
      />
      <MovieSlider
        title='TOP PHIM ĐÁNH GIÁ CAO'
        movies={listBestMovies}
        loading={loading}
      />
      <MovieSlider
        title='TOP PHIM KHÔNG NÊN XEM'
        movies={listBadMovies}
        loading={loading}
      />
    </HomeContainer>
  );
}

export default Home;
