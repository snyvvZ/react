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

  overflow: hidden;
`;

const StyledSticky = styled.div`
  ${mixins.contentWidth};
  ${mixins.backgroundHeader};

  display: flex;
  align-items: center; 
  position: -webkit-sticky; /* 사파리 브라우저 지원 */
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  padding: 20px;
  background-color: ${({theme}) => theme.primaryColor};
  z-index: 510;
`;

const StyledLogo = styled.h1`
  a {
    font-size: 40px;
    color: white;
    font-family: ${variables.fontMusinsa};
  }
`;

const StyledAnchor = styled.div`
  ${mixins.contentWidth};
  ${mixins.backgroundHeader};

  display: flex;
  align-items: center;
  position: -webkit-sticky; /* 사파리 브라우저 지원 */
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  padding: 10px 20px 20px 20px;
  background-color: ${({theme}) => theme.primaryColor};
  z-index: 500;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledSticky>
        <StyledLogo>
          <a href="/">TITLE</a>
        </StyledLogo>
        <Search />
        <Util />
      </StyledSticky>

      <StyledAnchor>
        <GNB />
        <Link />
      </StyledAnchor>
    </StyledHeader>
  );
};

export default Header;
