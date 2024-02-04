import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html, body, #root{
        height:100%; 
        width: 100%;
        padding:0;
        margin:0;
        line-height: 1;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p,
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }

    ol, ul{
        list-style: none;
        margin-left: 0;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyles;
