import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
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
      <Section>
        <MovieSlider movies={movies} loading={loading} />
      </Section>
    </div>
  );
}

export default Home;
