import { createGlobalStyle } from 'styled-components';

import { primaryColor } from '../config/colors';
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
`;
