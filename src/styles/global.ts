import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #1F2229;
    --background2: #2E303C;
    --background-button: #373945;
    --background-button2: #4B4D59;
    --yellow: #FAE800;
    --gray: #BEC2C6;
    --white: #FBFBFB;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  
  button {
    cursor: pointer;
  }
`;
