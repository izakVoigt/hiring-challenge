import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
  
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
`;
