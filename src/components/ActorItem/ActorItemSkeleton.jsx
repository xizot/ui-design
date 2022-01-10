import { Skeleton } from '@mui/material';
import React from 'react';
import { ActorItemContent, ActorItemWrapper } from './ActorItem.elements';

function ActorItemSkeleton() {
  return (
    <ActorItemWrapper>
      <div className="img-ratio2x3">
        <Skeleton variant="rectangular" className="img" />
      </div>
      <ActorItemContent>
        <Skeleton variant="text" height={30} />
        <Skeleton variant="text" width={50} height={20} />
      </ActorItemContent>
    </ActorItemWrapper>
  );
}

export default ActorItemSkeleton;
