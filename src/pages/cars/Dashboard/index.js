import { useEffect, useState } from 'react';
import { Container, Nav, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { URL_API } from '../../../config/urlApi';
import { FaTrashAlt, FaRegEdit, FaPlus } from 'react-icons/fa';
import { TableCar, Title } from './styled';
import api from '../../../utils/api';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [cars, setCars] = useState([]);
  const [token] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    api
      .get('/cars/owncars', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setCars(response.data);
      });
  }, [token]);

  /** método de exclusão de carro */
  async function handleDelete(id) {
    await api
      .delete(`/cars/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedCars = cars.filter((car) => car._id !== id);
        setCars(updatedCars);

        toast.success('Carro deletado com successo!', {
          theme: 'dark',
          toastId: 'succ',
        });

        return response.data;
      })
      .catch((err) => {
        const msgErr = err.response.data.message;
        toast.error(msgErr, { theme: 'dark', toastId: 'err_edit' });
        return;
      });
  }

  return (
    <Container>
      <Title>Dashboard</Title>
      <Link className="btn btn-sm btn-success mb-3" to="/cars/add">
        Adicionar novo carro <FaPlus />
      </Link>
      <TableCar>
        {cars.length > 0 && (
          <Table striped hover bordered size="sm" responsive>
            <thead>
              <tr>
                <th>imagem</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>cor</th>
                <th>Km</th>
                <th>Ano</th>
                <th>Preço</th>
                <th className="text-center">Ações</th>
              </tr>
            </thead>
            {cars.map((car) => (
              <>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={`${URL_API}/images/cars/${car.image[0]}`}
                        width="75"
                      />
                    </td>
                    <td>{car.model}</td>
                    <td>{car.brand}</td>
                    <td>{car.color}</td>
                    <td>{car.km.toFixed(3)}</td>
                    <td>{car.year}</td>
                    <td>R$: {car.price.toFixed(3)}</td>
                    <td className="actions">
                      {car.available ? (
                        <>
                          {car.buyer && <button>concluir venda</button>}
                          <Nav.Link href={`/car/edit/${car._id}`}>
                            <FaRegEdit className="edit" title="Editar" />
                          </Nav.Link>
                          <button
                            className="trash"
                            onClick={() => handleDelete(car._id)}
                          >
                            <FaTrashAlt title="Excluir" />
                          </button>
                        </>
                      ) : (
                        <p>vendido</p>
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

export default Dashboard;
