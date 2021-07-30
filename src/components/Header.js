import React from "react";
import styled from "styled-components";
import variables from "../styles/variables";
import mixins from "../styles/mixins";

const StyledHeader = styled.header`
  ${mixins.resetFont};

  background-color: ${({ theme }) => theme.primaryColor};
`;

const StyledTitle = styled.h1`
  padding: 15px 25px;
  font-size: 40px;
  color: white;
  font-family: ${variables.fontMusinsa};
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>TITLE</StyledTitle>
    </StyledHeader>
  );
};

export default Header;
