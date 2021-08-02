import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background: ${(props) => props.theme.bg};
        font-family: 'Josefin Sans', sans-serif;
        font-size: 18px;
    }
`;

export default GlobalStyle;
