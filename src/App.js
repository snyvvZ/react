import React from "react";
import styled from "styled-components";
import theme from "./global/theme";
import GlobalStyle from "./global/GlobalStyle";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

const StyledWrapper = styled.main`
  display: grid;
  grid-template-areas:
    "header header header"
    ". contents ."
    "footer footer footer";
`;

const App = ({ title }) => {
  const ThemeContext = React.createContext(); // FIXME Context 안됨

  return (
    <>
      <GlobalStyle />
      <ThemeContext.Provider value={theme}>
        <StyledWrapper className="container">
          <Header>snyvv</Header>
          <Contents title={title}>Contents Area</Contents>
          <Footer />
        </StyledWrapper>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
