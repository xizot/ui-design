import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Mainvisual from "../../components/Mainvisual/Mainvisual";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import Section from "../../components/Section/Section";
import { movies } from "./Home.data";

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
      <MovieSlider
        title='TOP PHIM MỚI NHẤt'
        movies={movies}
        loading={loading}
      />
      <MovieSlider
        title='TOP PHIM ĐÁNH GIÁ CAO'
        movies={movies}
        loading={loading}
      />
      <MovieSlider
        title='TOP PHIM KHÔNG NÊN XEM'
        movies={movies}
        loading={loading}
      />
    </div>
  );
}

export default Home;
