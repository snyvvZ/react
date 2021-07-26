import { css } from "styled-components";
import mixins from "./mixins";

const defaultPadding = css`
  padding: 15px 20px;
`;

const theme = {
  ...mixins,
  defaultPadding,
};

export default theme;
