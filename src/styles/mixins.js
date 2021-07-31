import { css } from "styled-components";
import theme from './theme';

const resetSection = css`
  padding: 0;
`;

const resetFont = css`
  font-family: Gulim, "Apple SD Gothic Neo", "Roboto", "Noto Sans KR",
    sans-serif;
`;

const blind = css`
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  position: absolute;
`;

const contentWidth = css`
  width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const backgroundHeader = css`
  &::before,
  &::after {
    display: block;
    background-color: ${({theme}) => theme.primaryColor};
    position: absolute;
    top: 0;
    bottom: 0;
    content: '';
  }

  &::before {
    width: 50vh;
    left: 100%;
  }

  &::after {
    width: 50vh;
    right: 100%;
  }
`;

const mixins = {
  resetSection,
  resetFont,
  blind,
  contentWidth,
  backgroundHeader,
};

export default mixins;
