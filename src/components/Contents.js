import React from "react";
import styled from "styled-components";

const StyledContents = styled.section`
  width: 1280px;
  margin: 0 auto;
`;

const Contents = ({ children }) => {
  return <StyledContents>{children}</StyledContents>;
};

export default Contents;
