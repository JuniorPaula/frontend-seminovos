import { Container } from './styled';
import PropTypes from 'prop-types';

const MainContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainContainer;

MainContainer.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
