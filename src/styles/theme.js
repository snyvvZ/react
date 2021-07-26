import variables from "./variables";
import mixins from "./mixins";

export const lightTheme = {
  ...variables,
  ...mixins,
  backgroundColor: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  ...variables,
  ...mixins,
  backgroundColor: "#000",
  fontColor: "#fff",
};
