import { css } from "styled-components";

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

const mixins = {
  resetSection,
  resetFont,
  blind,
};

export default mixins;
