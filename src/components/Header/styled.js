import styled from 'styled-components';
import { lightGreenColor } from '../../config/colors';

export const HeaderContainer = styled.header`
  background-color: ${lightGreenColor};
  color: #f1f1f1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;
  padding: 1em 1.5em;

  .navbar-logo {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      margin-right: 0.8em;
    }
  }

  ul {
    display: flex;
    align-items: center;
  }

  li,
  a {
    color: #f1f1f1;
    padding: 0.5em 0.4em;
  }
`;
