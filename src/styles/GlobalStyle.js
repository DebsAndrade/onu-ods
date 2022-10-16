import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        background: rgb(47,124,158);
        background: linear-gradient(111deg, rgba(47,124,158,1) 0%, rgba(95,80,181,1) 41%, rgba(95,80,181,1) 100%);
    }
`