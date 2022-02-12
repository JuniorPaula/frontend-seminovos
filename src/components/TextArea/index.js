import { TextAreaContainer } from './styled';
import PropTypes from 'prop-types';

const TextArea = ({ name, text, handleOnChange, value, rows }) => {
  return (
    <TextAreaContainer>
      <label htmlFor={name}>{text}:</label>
      <textarea
        name={name}
        onChange={handleOnChange}
        rows={rows}
        value={value}
      ></textarea>
    </TextAreaContainer>
  );
};

export default TextArea;

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};
