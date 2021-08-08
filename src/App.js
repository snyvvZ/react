import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from './styles/GlobalStyle';
import variables from "./styles/variables";
import mixins from "./styles/mixins";
import ThemeProvider from 'ThemeProvider';
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
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <StyledWrapper className="container">
          <Header />
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
