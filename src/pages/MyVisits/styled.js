import styled from 'styled-components';
import { blakColor, secondayColor } from '../../config/colors';

export const TableCar = styled.div`
  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  th {
    color: ${secondayColor};
  }

  td {
    color: ${blakColor};
  }
`;
export const Title = styled.h2`
  color: ${secondayColor};
  font-size: 34px;
  margin: 20px 0;
`;
