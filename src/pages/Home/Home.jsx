import React, { useEffect, useState } from "react";
import Mainvisual from "../../components/Mainvisual/Mainvisual";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { listBadMovies, listBestMovies, listNewMovies } from "./Home.data";

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
    </div>
  );
}

export default Home;
