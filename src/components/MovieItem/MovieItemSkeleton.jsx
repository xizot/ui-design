import { Skeleton } from "@mui/material";
import React from "react";
import { defaultPadding, SkeletonImage } from "../../GlobalMUI";
import {
  MovieContent,
  MovieContentText,
  MovieImageWrapper,
} from "./MovieItem.elements";

function MovieItemSkeleton() {
  return (
    <>
      <MovieImageWrapper>
        <SkeletonImage variant='rectangular' />
      </MovieImageWrapper>
      <MovieContent to='#'>
        <MovieContentText>
          <Skeleton variant='text' height={30} />
          <Skeleton variant='text' width={40} height={20} />
        </MovieContentText>
        <Skeleton
          variant='circular'
          width={40}
          height={40}
          style={{ marginLeft: defaultPadding }}
        />
      </MovieContent>
    </>
  );
}

export default MovieItemSkeleton;
