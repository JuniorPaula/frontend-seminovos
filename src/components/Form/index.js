//import { useState } from 'react';
import { FormCar } from './styled';
import PropTypes from 'prop-types';
import Input from '../Input';
import TextArea from '../TextArea';

const Form = ({ btnText }) => {
  //const [car] = useState(carData || {});
  // const [preview, setPreview] = useState([]);

  function fileOnChange() {
    //
  }

  function handleChange() {
    //
  }

  return (
    <FormCar>
      <Input
        text="Imagens do carro"
        type="file"
        name="images"
        handleOnChange={fileOnChange}
        multiple={true}
      />
      <Input
        text="Modelo do carro"
        type="text"
        name="model"
        placeholder="Digite o modelo do carro"
        handleOnChange={handleChange}
      />
      <Input
        text="Marca do carro"
        type="text"
        name="brand"
        placeholder="Digite a marca do carro"
        handleOnChange={handleChange}
      />
      <Input
        text="Cor do carro"
        type="text"
        name="color"
        placeholder="Qual a cor do carro?"
        handleOnChange={handleChange}
      />
      <Input
        text="Km do carro"
        type="number"
        name="km"
        placeholder="Qual a kilometragem do carro?"
        handleOnChange={handleChange}
      />
      <Input
        text="Ano do carro"
        type="number"
        name="year"
        placeholder="Qual o ano do carro?"
        handleOnChange={handleChange}
      />
      <Input
        text="Valor do carro"
        type="number"
        name="price"
        placeholder="Digite o valor do carro"
        handleOnChange={handleChange}
      />
      <TextArea
        text="Descrição do carro"
        name="description"
        rows="5"
        handleOnChange={handleChange}
      />
      <input type="submit" value={btnText} />
    </FormCar>
  );
};

export default Form;

Form.propTypes = {
  // handleSubmit: PropTypes.func.isRequired,
  // carData: PropTypes.object.isRequired,
  btnText: PropTypes.string.isRequired,
};
