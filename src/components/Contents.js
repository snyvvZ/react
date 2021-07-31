import React from "react";
import styled from "styled-components";
import mixins from "../styles/mixins";

const StyledContents = styled.main`
  ${mixins.resetSection};
  ${mixins.contentWidth};

  min-height: 200vh; // FIXME 임시 스타일
  padding: 20px;
`;

const Contents = ({ children }) => {
  return <StyledContents className="contents">{children}</StyledContents>;
};

export default Contents;
