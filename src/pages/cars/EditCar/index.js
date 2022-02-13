import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Paragrath, Title } from './styled';
import api from '../../../utils/api';
import Form from '../../../components/Form';

const EditCar = () => {
  const [car, setCar] = useState({});
  const [token] = useState(localStorage.getItem('token') || '');
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/cars/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => setCar(response.data));
  }, [token, id]);

  /** método para atualizar um carro */
  async function updateCar() {
    //
  }

  return (
    <Container>
      <Title>Edite seu carro</Title>
      <Paragrath>
        Depois da edição os dados serão atualizados no sistema.
      </Paragrath>
      {car.model && (
        <Form
          handleSubmit={updateCar}
          btnText="Atualizar carro"
          carData={car}
        />
      )}
    </Container>
  );
};

export default EditCar;
