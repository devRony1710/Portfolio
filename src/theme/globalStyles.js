import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    body {
        background-color: #090E16;
        color: #FFFFFF;
        font-family: 'Varela', sans-serif;
        max-width: 1660px;

        @media screen and (min-width: 1660px) {
            margin: 0 auto;
        }
    };

    h2 {
        font-family: 'Varela Round', sans-serif;;
    }
`;

export default GlobalStyle;
