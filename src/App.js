import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import variables from "./styles/variables";
import mixins from "./styles/mixins";
import { musinsaTheme, wusinsaTheme, mensinsaTheme } from "./styles/theme";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

const StyledWrapper = styled.section`
  ${mixins.resetSection};
`;

const StyledButton = styled.button`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.accentColor};
  border-radius: 4px;
  font-family: ${variables.fontMusinsa};
  color: ${({ theme }) => theme.accentColor};
  & + & {
    margin-left: 12px;
  }
`;

const App = () => {
  const [themeMode, setThemeMode] = useState("musinsa");
  const gender = ["musinsa", "wusinsa", "mensinsa"];

  const genderButton = gender.map((text) => (
    <StyledButton onClick={() => setThemeMode(text)}>
      {text === "wusinsa" ? "여성" : text === "mensinsa" ? "남성" : "전체"}
    </StyledButton>
  ));

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
        <StyledWrapper className="container">
          <Header>MUSINSA</Header>
          <Contents>
            Contents Area
            <div>{genderButton}</div>
          </Contents>
          <Footer />
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
