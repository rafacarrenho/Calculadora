import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
      font-family: "RobotoMono", monospace;
    }

    html,
    body {
      height: 100%;
    }

    body {
      margin: 0 !important;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100vh;
      background: linear-gradient(
        to right bottom,
        ${theme.colors.background},
        ${theme.colors.backgroundDark}
      );
    }

    @media screen and (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media screen and (max-width: 720px) {
      html {
        font-size: 87.5%;
      }
    }

    body,
    input,
    textarea,
    button {
      font: 400 1rem "Inter", sans-serif;
    }

    button {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  `}`;

export default GlobalStyles;
