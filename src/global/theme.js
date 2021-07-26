import variables from "./variables";
import mixins from "./mixins";

export const light = {
  titleColor: "#b8b8b8",
  bgColor: "#121212",
};

export const dark = {
  titleColor: "#121212",
  bgColor: "#b8b8b8",
};

const theme = {
  ...variables,
  ...mixins,
};

export default theme;
