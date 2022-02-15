import { useEffect, useState } from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { DetailsContainer, Title } from './styled';
import { URL_API } from '../../config/urlApi';
import api from '../../utils/api';

const CarDetails = () => {
  const [car, setCar] = useState({});
  const [token] = useState(localStorage.getItem('token') || '');
  const { id } = useParams();

  useEffect(() => {
    api.get(`/cars/${id}`).then((response) => setCar(response.data));
    console.log(car);
  }, [id]);

  return (
    <DetailsContainer>
      {car.model && (
        <Container>
          <Row>
            <Title>Dados do {car.model}</Title>
            <Col className="text-center">
              {car.images.map((image, index) => (
                <img
                  src={`${URL_API}/images/cars/${image}`}
                  key={index}
                  alt={car.model}
                />
              ))}
            </Col>
          </Row>
          <Row>
            <Col md={6} className="box-left">
              <p>
                <span className="bold">Modelo:</span> {car.model}
              </p>
              <p>
                <span className="bold">Marca:</span> {car.brand}
              </p>
              <p>
                <span className="bold">Cor:</span> {car.color}
              </p>
              <p>
                <span className="bold">Km:</span> {car.km}
              </p>
              <p>
                <span className="bold">Ano:</span> {car.year}
              </p>
              <p>
                <span className="bold">Valor:</span> R$ {car.price}
              </p>
              {token ? (
                <button className="btn btn-success">Negociar</button>
              ) : (
                <p>
                  Você precisa{' '}
                  <NavLink href="/register">criar uma conta</NavLink> para
                  negociar a venda.
                </p>
              )}
            </Col>
            <Col md={6} className="box-right">
              <h4>Descrição</h4>
              <p>{car.description}</p>
            </Col>
          </Row>
        </Container>
      )}
    </DetailsContainer>
  );
};

export default CarDetails;
