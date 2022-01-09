import { Typography } from '@mui/material';
import React from 'react';
import { Label } from '../ModScoreItem/ModScoreItem.elements';
import {
  TotalScoreBox,
  TotalScoreTop,
  TotalScoreWrapper,
} from './TotalScore.elements';

function TotalScore({ score, review }) {
  return (
    <TotalScoreWrapper>
      <Label>Đánh giá từ người xem</Label>
      <TotalScoreBox>
        <TotalScoreTop>
          <box-icon
            name="star"
            type="solid"
            color="#ffe700"
            size="lg"
            style={{ marginLeft: -48 }}></box-icon>
          <Typography variant="h3" style={{ fontWeight: 900 }}>
            {score}
          </Typography>
        </TotalScoreTop>
        <Typography variant="body2">{review}</Typography>
        <Typography variant="body2">Lượt đánh giá</Typography>
      </TotalScoreBox>
    </TotalScoreWrapper>
  );
}

export default TotalScore;
