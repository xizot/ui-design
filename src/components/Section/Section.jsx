import React from "react";
import {
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "./Section.elements";

function Section({ title, children }) {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  );
}

export default Section;
