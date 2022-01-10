import { Skeleton } from '@mui/material';
import React from 'react';
import {
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from './Section.elements';

function Section({ title, children, loading }) {
  return (
    <SectionWrapper>
      {loading ? (
        <Skeleton variant="text" height={50} width={250} />
      ) : (
        <SectionTitle>{title}</SectionTitle>
      )}
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  );
}

export default Section;
