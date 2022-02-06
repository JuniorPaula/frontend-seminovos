import styled from 'styled-components';
import { lightGrayColor, primaryColor } from '../../config/colors';

export const FooterContainer = styled.footer`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  color: ${lightGrayColor};

  a {
    color: ${primaryColor};
  }
`;
