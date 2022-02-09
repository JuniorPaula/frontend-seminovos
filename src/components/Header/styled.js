import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const HeaderContainer = styled.header`
  background-color: ${primaryColor};
  color: #f1f1f1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  .navbar-nav .nav-link {
    color: #f1f1f1;
  }
`;
