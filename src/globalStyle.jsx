import { createGlobalStyle, styled } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  *, *::before, *::after {
  box-sizing: border-box;
  }
  html {
    color-scheme: dark light;
    font-size: 10px;
  }
  body {
    font-family: 'Karla', sans-serif;
    min-height: 100vh;
    background: #E6EFF5;
    display: flex;
    align-items: center;
    justify-content: center;
    }
  }
  img, picture, svg, video {
    display: block;
    max-width: 100%;
  }
  input, textarea, button, select {
    font: inherit;
  }
`;
export const Subheading = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.225px;
`;
export default GlobalStyle;
