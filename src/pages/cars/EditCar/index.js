import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Paragrath, Title } from './styled';
import { toast } from 'react-toastify';
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
  async function updateCar(car) {
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

    /** chamada da api */
    await api
      .patch(`/cars/edit/${car._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'multipart-formdata',
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
