import styled from 'styled-components';
import { primaryColor, secondayColor } from '../../../config/colors';

export const RegisterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;

  .box-right {
    flex: 1;
    padding: 30px 50px;
    border-radius: 10px;
    color: ${primaryColor};

    p {
      margin-top: 20px;
    }
  }

  .box-left {
    flex: 1;
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.h2`
  color: ${secondayColor};
  font-size: 3em;

  @media (max-width: 480px) {
    font-size: 22px;
  }

  .destaque {
    color: ${primaryColor};
  }
`;
