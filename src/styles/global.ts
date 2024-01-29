import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 outline: none;
 font-family: 'Quicksand', sans-serif;
font-family: 'Roboto', sans-serif;
text-decoration: none;
list-style: none;
scroll-behavior: smooth; 
     
 } 

 ::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors["base-grenn"]};
    border-radius: 5px;
}
 body {
  background: ${({ theme }) => theme.colors["base-white2"]};
 -webkit-font-smoothing: antialiased;
 } 
 body, input, textarea, button {
     
     font-weight: 400;
     
 } 
 button {
     cursor: pointer;
 }
 a {
     text-decoration: none;
 }
 `;
