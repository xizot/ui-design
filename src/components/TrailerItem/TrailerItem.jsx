import { IconButton } from '@mui/material';
import React from 'react';
import {
  TrailerItemContent,
  TrailerItemHover,
  TrailerItemImage,
  TrailerItemWrapper,
} from './TrailerItem.elements';

function TrailerItem({ onOpenModal }) {
  return (
    <TrailerItemWrapper>
      <TrailerItemContent>
        <TrailerItemImage>
          <img
            src="https://intelligent-yard.surge.sh/assets/images/videos/video-1.jpg"
            alt=""></img>
        </TrailerItemImage>
        <TrailerItemHover className="on-hover" onClick={onOpenModal}>
          <IconButton>
            <box-icon name="play-circle" color="#ffffff" size="lg"></box-icon>
          </IconButton>
        </TrailerItemHover>
      </TrailerItemContent>
    </TrailerItemWrapper>
  );
}

export default TrailerItem;
