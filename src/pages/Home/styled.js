import styled from 'styled-components';
import {
  blakColor,
  lightGreenColor,
  redColor,
  secondayColor,
} from '../../config/colors';

export const CarsContainer = styled.div`
  width: 100%;
  margin: 1.5%;
  display: flex;
  flex-direction: column;
  text-align: center;

  h3 {
    color: ${blakColor};
    font-size: 22px;
    padding: 8px;
  }

  a {
    background-color: ${lightGreenColor};
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
    padding: 7px 12px;
    border: none;
    font-size: 18px;
    border-radius: 5px;

    &:hover {
      background-color: ${secondayColor};
    }
  }

  span {
    font-weight: bold;
  }

  .vendido {
    background-color: ${redColor};
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
    padding: 7px 12px;
    border: none;
    font-size: 18px;
    border-radius: 5px;
  }
`;

export const ImageCover = styled.div`
  background-size: cover;
  background-position: center;
  height: 225px;
  width: 100%;
  margin-bottom: 1.2em;
  border: 3px solid ${lightGreenColor};
`;

export const Title = styled.h1`
  text-align: center;
  margin: 20px 0 40px 0;
  color: ${secondayColor};
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 2px;
`;
