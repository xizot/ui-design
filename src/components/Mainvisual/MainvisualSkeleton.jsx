import { Container, Skeleton } from '@mui/material';
import React from 'react';
import { theme } from '../../GlobalMUI';
import {
  MainvisualInfo,
  MainvisualItem,
  MainvisualItemImage,
  MainVisualScore,
} from './Mainvisual.elements';

function MainvisualSkeleton() {
  return (
    <MainvisualItem className="sliderItem">
      <MainvisualItemImage>
        <Skeleton variant="rectangular" className="img" />
      </MainvisualItemImage>
      <MainvisualInfo>
        <Container>
          <Skeleton variant="text" height={60} width={150} />
          <Skeleton variant="text" height={70} width="30%" />
          <MainVisualScore>
            <Skeleton
              variant="circular"
              width={50}
              height={50}
              sx={{ marginRight: theme.spacing(1) }}
            />
            <Skeleton variant="text" height={70} width={50} />
          </MainVisualScore>
          <Skeleton variant="text" width="60%" height={30} />
          <Skeleton variant="text" width="55%" height={30} />
          <Skeleton variant="text" width="50%" height={30} />
          <Skeleton variant="text" width={150} height={50} />
        </Container>
      </MainvisualInfo>
    </MainvisualItem>
  );
}

export default MainvisualSkeleton;
