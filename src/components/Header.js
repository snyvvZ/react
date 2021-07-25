import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: black;
`;

const StyledTitle = styled.h1`
  padding: 15px 25px;
  font-size: 40px;
  color: white;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>snyvv</StyledTitle>
    </StyledHeader>
  );
};

export default Header;
