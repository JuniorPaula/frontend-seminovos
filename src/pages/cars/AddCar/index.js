import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Paragrath, Title } from './styled';
import { toast } from 'react-toastify';
import Form from '../../../components/Form';
import api from '../../../utils/api';

const AddCar = () => {
  const [token] = useState(localStorage.getItem('token') || '');

  /** metodo pra adicionar um carro */
  async function regiterCar(car) {
    const formData = new FormData();

    await Object.keys(car).forEach((key) => {
      if (key === 'images') {
        for (let i = 0; i < car[key].length; i++) {
          formData.append('images', car[key][i]);
        }
      } else {
        formData.append(key, car[key]);
      }
    });

    await api
      .post('cars/create', formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        toast.success(response.data.message, {
          theme: 'dark',
          toastId: 'success',
        });
        return response.data;
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          theme: 'dark',
          toastId: 'error',
        });
        return;
      });
  }

  return (
    <Container>
      <Title>Adicione um carro</Title>
      <Paragrath>
        Em breve ele estará disponível para venda. &#128526;
      </Paragrath>
      <Form handleSubmit={regiterCar} btnText="Adicionar Carro" />
    </Container>
  );
};

export default AddCar;
