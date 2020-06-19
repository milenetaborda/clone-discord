import {  createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased !important;
  }

  *, button, input {
    border: 0;
    font-family: "Roboto", sans-sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
   
    --white: #fff;
    --gray: #8a8c90;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;
 
    --notification: #f84a4b;
    --discord: #6e86d6;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;
 
    --link: #5d80d6;
 
    --rocketseat: #6633cc;
  }
  
`;