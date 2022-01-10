import React from 'react';
import { Label, ModScoreItemWrapper } from './ModScoreItem.elements';

function ModScoreItem({ title, score }) {
  return (
    <ModScoreItemWrapper>
      <Label> {title}: </Label>
      <div style={{ position: 'relative' }}>
        <img
          src={require(`./../../assets/images/mod-scores/${score}.png`)}
          alt=""
          style={{ height: 25 }}
        />
      </div>
    </ModScoreItemWrapper>
  );
}

export default ModScoreItem;
