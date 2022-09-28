import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    //Fonts
    --font-main: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    // Colors
    --title: #161615;
    --light-gray: #BEBDBE;
    --dark-gray: #6C6C6C;
  }

  * {
    font-family: 'Poppins', sans-serif;
  }

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
    font-family: var(--font-main)
  }


  html {
    width: 100%;
    height: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    width: 100%;
    height: 100%;
  }

  input, button, textarea {
    font-family: var(--font-main)
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
