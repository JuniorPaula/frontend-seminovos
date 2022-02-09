import styled from 'styled-components';
import { lightGrayColor } from '../../config/colors';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  label {
    margin-bottom: 0.3em;
    font-weight: 500;
    font-size: 1.2em;
  }

  input {
    padding: 0.4em 0.7em;
    border-radius: 5px;
    border: 1px solid ${lightGrayColor};
  }
`;
