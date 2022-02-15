import styled from 'styled-components';
import { lightGrayColor, secondayColor } from '../../config/colors';

export const DetailsContainer = styled.div`
  img {
    width: 280px;
    height: 280px;
    margin: 0 10px;
  }

  .box-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;

    p {
      font-size: 22px;
    }

    button {
      width: 30%;
      transition: 0.5s;
      border: none;

      &:hover {
        background: ${secondayColor};
        border: none;
      }
    }

    .bold {
      font-weight: bold;
      margin-right: 10px;
      font-size: 18px;
    }
  }

  .box-right {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    p {
      padding: 15px;
      border: 1px solid ${lightGrayColor};
      color: ${secondayColor};
    }
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  font-weight: 900;
  margin: 20px 0;
  color: ${secondayColor};
  text-align: center;
`;
