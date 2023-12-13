import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const fontFamily = 'NanumSquareNeo-Variable';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body * {
    font-family: ${fontFamily};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  
`;

export default GlobalStyle;
