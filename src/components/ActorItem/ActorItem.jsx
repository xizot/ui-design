import { Typography } from '@mui/material';
import React from 'react';
import {
  ActorItemContent,
  ActorItemImage,
  ActorItemName,
  ActorItemWrapper,
} from './ActorItem.elements';

function ActorItem({ imgSrc, name, position }) {
  return (
    <ActorItemWrapper>
      <div className="img-ratio2x3">
        <img src={imgSrc} alt="" style={{ background: '#D3D3D3' }} />
      </div>
      <ActorItemContent>
        <ActorItemName>{name}</ActorItemName>
        <Typography variant="body2">{position}</Typography>
      </ActorItemContent>
    </ActorItemWrapper>
  );
}

export default ActorItem;
