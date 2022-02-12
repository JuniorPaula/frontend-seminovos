import styled from 'styled-components';
import {
  blakColor,
  lightGreenColor,
  redColor,
  secondayColor,
} from '../../../config/colors';

export const TableCar = styled.div`
  .add-new-car {
    color: ${lightGreenColor};
  }

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

  .nav-link {
    .edit {
      color: ${lightGreenColor};
    }
  }

  .trash {
    color: ${redColor};
  }
`;
export const Title = styled.h2`
  color: ${secondayColor};
  font-size: 38px;
  margin: 20px 0;
`;
