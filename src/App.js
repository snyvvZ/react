import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { musinsaTheme, wusinsaTheme, mensinsaTheme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

const StyledWrapper = styled.section`
  display: grid;
  grid-template-areas:
    "header header header"
    ". contents ."
    "footer footer footer";
`;

const App = () => {
  const [themeMode, setThemeMode] = useState("musinsa");

  const changeTheme = () => {
    console.log(themeMode);
  };

  return (
    <>
      <ThemeProvider
        theme={
          themeMode === "musinsa"
            ? musinsaTheme
            : themeMode === "wusinsa"
            ? wusinsaTheme
            : mensinsaTheme
        }
      >
        <GlobalStyle />
        <StyledWrapper className="container">
          <Header>snyvv</Header>
          <Contents>
            <button type="button" onClick={changeTheme}>
              전체
            </button>
            <button type="button" onClick={changeTheme}>
              여성
            </button>
            <button type="button" onClick={changeTheme}>
              남성
            </button>
          </Contents>
          <Footer />
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
