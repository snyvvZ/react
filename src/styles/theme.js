import variables from "./variables";
import mixins from "./mixins";

export const musinsaTheme = {
  ...variables,
  ...mixins,

  accentColor: variables.blue700,
  primaryColor: variables.black,
};

export const wusinsaTheme = {
  ...variables,
  ...mixins,

  accentColor: variables.wusinsaAccent,
  primaryColor: variables.wusinsaGray500,
};

export const mensinsaTheme = {
  ...variables,
  ...mixins,

  accentColor: variables.blue700,
  primaryColor: variables.mensinsaPrimary,
};
