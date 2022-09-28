import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    //Fonts
    --font-main: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    // Colors
    --color-title: #161615;
    ---color-light-gray: #BEBDBE;
    --color-dark-gray: #6C6C6C;

    // globals vars
    --mobile-width: 780px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-main);
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
  }


  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
