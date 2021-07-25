import React, { useState } from "react";
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

const StyledCount = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    height: 40px;
    padding: 0 8px;
    border: 1px solid black;
  }

  > input {
    height: 40px;
    padding: 0 8px;
    font-size: inherit;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    box-sizing: border-box;
  }
`;

const ThemeContext = React.createContext(); // FIXME Context 안됨

const App = ({ title }) => {
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(true);

  const countIncrease = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const countDecrease = (e) => {
    e.preventDefault();
    if (count <= 1) alert("✋🏻멈춰!");
    else setCount(count - 1);
  };

  const clickToggle = (e) => {
    e.preventDefault();
    setToggle(toggle ? false : true);
    console.log(toggle);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeContext.Provider value={theme}>
        <StyledWrapper className="container">
          <Header>snyvv</Header>
          <Contents title={title}>
            <StyledCount>
              <button onClick={countDecrease}>Count</button>
              <input type="number" value={count} />
              <button onClick={countIncrease}>Count</button>
            </StyledCount>

            <div>
              <button onClick={clickToggle}>Toggle</button>
            </div>
          </Contents>
          <Footer />
        </StyledWrapper>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
