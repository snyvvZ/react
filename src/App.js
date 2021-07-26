import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme, { light, dark } from "./global/theme";
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
  ${({ theme }) => theme.backgroundColor};
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

const App = ({ title }) => {
  const [theme, setThemeMode] = useState("light"); // 테마 모드 세팅
  setThemeMode((theme) => (theme === "light" ? dark : light)); // 테마 환경에 맞는 테마 컬러 가져오기

  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(true);

  const toggleTheme = () => setThemeMode(theme === "light" ? "dark" : "light"); // 테마 변경하기 이벤트

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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledWrapper className="container">
          <Header>snyvv</Header>
          <Contents title={title}>
            <button type="button" onClick={toggleTheme}>
              테마 변경
            </button>

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
      </ThemeProvider>
    </>
  );
};

export default App;
