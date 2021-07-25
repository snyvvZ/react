import React from "react";
import styled from "styled-components";
import GlobalStyle from "./global/GlobalStyle";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

const StyledWrapper = styled.main`
  display: grid;
`;

const App = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <Header>snyvv</Header>
        <Contents>Contents Area</Contents>
        <Footer />
      </StyledWrapper>
    </>
  );
};

export default App;
