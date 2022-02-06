import { createGlobalStyle } from 'styled-components';

import { primaryColor, secondayColor } from '../config/colors';
//import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    background: ${primaryColor};
    color: #fff;
    padding: 10px 18px;
    font-size: 18px;
    transition: all 300ms;
    border-radius: 5px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  input[type="submit"] {
    border-radius: 10px;
    background: ${primaryColor};
    color: #f1f1f1;
    border: none;
    min-width: 100px;
    min-height: 2.5em;
    width: 100%;
    font-size: 1.2em;
    cursor: pointer;

    &:hover {
      background-color: ${secondayColor};
      transition: .2s ease-in-out
    }
  }

`;
