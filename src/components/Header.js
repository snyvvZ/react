import React from "react";
import styled from "styled-components";
import variables from "../styles/variables";
import mixins from "../styles/mixins";
import Search from './Search';
import GNB from './GNB';
import Util from './Util';
import Link from './Link';

const StyledHeader = styled.header`
  ${mixins.resetFont};

  display: grid;
  grid-template-areas:
		"logo search util"
		"gnb gnb link";
  align-items: center;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.primaryColor};
`;

const StyledLogo = styled.h1`
  grid-area: logo;
  font-size: 40px;
  color: white;
  font-family: ${variables.fontMusinsa};
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>TITLE</StyledLogo>

      <Search />
      <GNB />
      <Util />
      <Link />
    </StyledHeader>
  );
};

export default Header;
