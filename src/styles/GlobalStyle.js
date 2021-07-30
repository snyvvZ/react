import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, section, h1, h2, h3, h4 {
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyle;