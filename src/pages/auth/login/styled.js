import styled from 'styled-components';
import { primaryColor, secondayColor } from '../../../config/colors';

export const LoginContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;

  .box-right {
    flex: 1;
    padding: 30px 50px;
    border-radius: 10px;
    color: ${primaryColor};

    h2 {
      font-size: 36px;
      color: ${secondayColor};
      margin-bottom: 1.1em;
    }

    p {
      margin-top: 20px;
    }
  }

  .box-left {
    flex: 1;
    display: flex;
    align-items: center;

    img {
      width: 450px;
    }

    @media (max-width: 480px) {
      display: none;
    }
  }
`;
