import { createGlobalStyle } from 'styled-components';




const GlobalStyle = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
  }
  
  body {
    font-family: "Inter", sans-serif;
  }

 
`;
 
export default GlobalStyle;