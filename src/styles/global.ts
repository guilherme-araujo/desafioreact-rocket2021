import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --red: #eb0025;
    --darkblue: #00439e;
    --lightblue: #006fc1;
    --yellow: #f78b00;
    --fontblue: #0a0055;
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

  footer {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    margin-top: 3rem;
    p {
      margin 1rem 0;
    }
  }
`;
