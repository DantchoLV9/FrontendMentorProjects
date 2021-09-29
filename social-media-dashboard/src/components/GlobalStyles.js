import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Inter', sans-serif;
        background: ${(props) => props.theme.bg}
    }
`;

export default GlobalStyles;
