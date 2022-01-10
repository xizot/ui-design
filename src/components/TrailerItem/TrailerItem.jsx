import { IconButton, Skeleton } from '@mui/material';
import React from 'react';
import {
  TrailerItemContent,
  TrailerItemHover,
  TrailerItemImage,
  TrailerItemIndex,
  TrailerItemWrapper,
} from './TrailerItem.elements';

function TrailerItem({ onOpenModal, index, loading }) {
  return (
    <TrailerItemWrapper>
      <TrailerItemContent>
        {loading ? (
          <Skeleton variant="rectangular" height={300} />
        ) : (
          <>
            <TrailerItemIndex variant="h5">{index}</TrailerItemIndex>
            <TrailerItemImage>
              <img
                src={require('../../assets/images/trailer-default.jpg')}
                alt=""
              />
            </TrailerItemImage>
            <TrailerItemHover className="on-hover" onClick={onOpenModal}>
              <IconButton>
                <box-icon
                  name="play-circle"
                  color="#ffffff"
                  size="lg"></box-icon>
              </IconButton>
            </TrailerItemHover>
          </>
        )}
      </TrailerItemContent>
    </TrailerItemWrapper>
  );
}

export default TrailerItem;
