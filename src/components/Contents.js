import React from "react";
import styled from "styled-components";

const StyledContents = styled.main`
  grid-area: contents;
  width: 1240px;
  padding: 20px;
  margin: 0 auto;
  padding: 50px 20px;
`;

const Contents = ({ children }) => {
  return <StyledContents className="contents">{children}</StyledContents>;
};

export default Contents;
