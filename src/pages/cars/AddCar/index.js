import { Container } from 'react-bootstrap';
import Form from '../../../components/Form';
import { Paragrath, Title } from './styled';

const AddCar = () => {
  return (
    <Container>
      <Title>Adicione um carro</Title>
      <Paragrath>
        Em breve ele estará disponível para venda. &#128526;
      </Paragrath>
      <Form btnText="Adicionar Carro" />
    </Container>
  );
};

export default AddCar;
