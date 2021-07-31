import React from "react";
import styled, { css } from "styled-components";
import variables from "../styles/variables";
import mixins from "../styles/mixins";
import Search from './Search';
import GNB from './GNB';
import Util from './Util';
import Link from './Link';
import { useScroll } from '../hooks/useScroll';

const StyledHeader = styled.header`
  ${mixins.resetFont};

  height: 160px;
  overflow: hidden;
  position: relative;
`;

const StyledSticky = styled.div`
  ${mixins.contentWidth};
  ${mixins.backgroundHeader};

  display: flex;
  align-items: center;
  position: fixed;
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

  ${({sticky}) => sticky > 88 && css`
    transform: translateY(-100%);
  `};

  display: flex;
  align-items: center;
  position:fixed;
  left: 0;
  right: 0;
  top: 88px;
  padding: 13px 20px 20px 20px;
  background-color: ${({theme}) => theme.primaryColor};
  transition: transform .15s;
  z-index: 500;
`;

const Header = () => {
  const { scrollY } = useScroll();

  return (
    <StyledHeader>
      <StyledSticky>
        <StyledLogo>
          <a href="/">TITLE</a>
        </StyledLogo>
        <Search />
        <Util />
      </StyledSticky>

      <StyledAnchor sticky={scrollY}>
        <GNB />
        <Link />
      </StyledAnchor>
    </StyledHeader>
  );
};

export default Header;
