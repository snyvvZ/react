import React from "react";
import styled from "styled-components";
import mixins from "../styles/mixins";

const StyledContents = styled.main`
  ${mixins.resetSection}

  min-height: 80vh; // FIXME 임시 스타일
  padding: 50px 20px;
`;

const Contents = ({ children }) => {
  return <StyledContents className="contents">{children}</StyledContents>;
};

export default Contents;
