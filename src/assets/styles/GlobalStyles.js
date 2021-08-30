import { createGlobalStyle } from "styled-components";
import { COLORS } from "../../commons/constants/colors";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  html {
    scroll-behavior: smooth;
    background-color: ${COLORS.black};
  }
  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
 
  body {
    font-family: 'Inter', sans-serif;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    color: ${COLORS.white};
  }
`;

export default GlobalStyles;
