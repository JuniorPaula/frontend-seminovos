import styled from 'styled-components';
import { blakColor, lightGrayColor } from '../../config/colors';

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  label {
    margin-bottom: 0.3em;
    font-weight: 500;
    font-size: 1.2em;
  }

  textarea {
    padding: 0.4em 0.7em;
    border-radius: 5px;
    color: ${blakColor};
    border: 1px solid ${lightGrayColor};
  }
`;
