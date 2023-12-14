import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body * {
    box-sizing: border-box;
  }
  :root {
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
