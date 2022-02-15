import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { URL_API } from '../../config/urlApi';
import { TableCar, Title } from './styled';
import api from '../../utils/api';

const MyVisits = () => {
  const [cars, setCars] = useState([]);
  const [token] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    api
      .get('/cars/ownbuyer', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setCars(response.data);
        console.log(cars);
      });
  }, [token]);

  return (
    <Container>
      <Title>Minhas negociações</Title>
      <TableCar>
        {cars.length > 0 && (
          <Table striped hover bordered size="sm" responsive>
            <thead>
              <tr>
                <th>imagem</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th className="text-center">Ações</th>
              </tr>
            </thead>
            {cars.map((car) => (
              <>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={`${URL_API}/images/cars/${car.images[0]}`}
                        width="75"
                      />
                    </td>
                    <td>{car.model}</td>
                    <td>{car.brand}</td>
                    <td className="actions">
                      {car.available ? (
                        <p>Negociação em processo.</p>
                      ) : (
                        <p>Comprado.</p>
                      )}
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
          </Table>
        )}
        {cars.length === 0 && <p>Não há carros cadastrdos</p>}
      </TableCar>
    </Container>
  );
};

export default MyVisits;
