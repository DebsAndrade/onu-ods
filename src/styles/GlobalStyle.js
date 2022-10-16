import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        color: #4d4d4d;
    }

    body {
        height: 100vh;
        background: #fff
    }
`