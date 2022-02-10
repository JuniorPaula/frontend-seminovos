import styled from 'styled-components';
import { secondayColor } from '../../../config/colors';

export const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 460px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const Title = styled.h2`
  color: ${secondayColor};
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  .image-profile {
    width: 150px;
  }
`;
