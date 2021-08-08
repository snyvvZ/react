import React from 'react';
import { ThemeProvider } from 'styled-components';
import { musinsaTheme, wusinsaTheme, mensinsaTheme } from "./styles/theme";

export function ThemeProvider({children}) {
  const [themeMode, setThemeMode] = useState("musinsa");
  const gender = ["musinsa", "wusinsa", "mensinsa"];

  const genderButton = gender.map((text) => (
    <StyledButton onClick={() => setThemeMode(text)}>
      {text === "wusinsa" ? "여성" : text === "mensinsa" ? "남성" : "전체"}
    </StyledButton>
  ));

  return (
    <ThemeProvider
      theme={
        themeMode === "musinsa"
          ? musinsaTheme
          : themeMode === "wusinsa"
          ? wusinsaTheme
          : mensinsaTheme
    }
    >
      {children}
      {genderButton}
    </ThemeProvider>
  )
}