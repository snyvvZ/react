import React from "react";
import styled from "styled-components";

const StyledContents = styled.section`
  grid-area: contents;
  width: 1000px;
  padding: 20px;
  margin: 0 auto;
  ${({ theme }) => theme.defaultPadding};
`;

const StyledTitle = styled.h1`
  font-size: 28px;
  color: ${({ theme }) => theme.colorRed};
`;

const Contents = ({ children, title }) => {
  return (
    <StyledContents>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledContents>
  );
};

export default Contents;
