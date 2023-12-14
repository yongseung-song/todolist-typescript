import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const fontFamily = 'NanumSquareNeo-Variable';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body * {
    font-family: ${fontFamily};
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  :root {
    min-width: 800px;
    max-width: 1200px;
    margin: 0 auto;
  }  
`;

export default GlobalStyle;
