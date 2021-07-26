import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

const StyledWrapper = styled.main`
  display: grid;
  grid-template-areas:
    "header header header"
    ". contents ."
    "footer footer footer";
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.fontColor};
`;

const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.blue};
  border-radius: 4px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.blue};
`;

const App = ({ title }) => {
  const [themeMode, setTheme] = useState("light");

  const toggleTheme = () =>
    themeMode === "light" ? setTheme("dark") : setTheme("light");

  return (
    <>
      <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <StyledWrapper className="container">
          <Header>snyvv</Header>
          <Contents title={title}>
            <StyledButton type="button" onClick={toggleTheme}>
              테마 변경
            </StyledButton>
          </Contents>
          <Footer />
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
