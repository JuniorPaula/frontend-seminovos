import PropTypes from 'prop-types';
import { InputContainer } from './styled';

const Input = ({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  multiple,
}) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        {...(multiple ? { multiple } : '')}
      />
    </InputContainer>
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  multiple: PropTypes.array.isRequired,
};
