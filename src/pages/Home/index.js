import { useEffect, useState } from 'react';
import { URL_API } from '../../config/urlApi';
import { CarsContainer, ImageCover, Title } from './styled';
import { Link } from 'react-router-dom';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import api from '../../utils/api';

const Home = () => {
  const [cars, setCar] = useState([]);

  useEffect(() => {
    api.get('/cars').then((response) => {
      setCar(response.data);
    });
  }, []);

  return (
    <Container>
      <Title>Confira as ofertas em destaque</Title>
      <Row>
        {cars.length > 0 &&
          cars.map((car) => (
            <>
              <Col md={3}>
                <CarsContainer>
                  <ImageCover
                    style={{
                      backgroundImage: `url(${URL_API}/images/cars/${car.images[0]})`,
                    }}
                  />

                  <ListGroup className="mb-3">
                    <ListGroup.Item>
                      <h3>{car.model}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>Marca:</span> {car.brand}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>Cor:</span> {car.color}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>Km:</span> {car.km}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>Ano:</span> {car.year}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h4>R$: {car.price}</h4>
                    </ListGroup.Item>
                  </ListGroup>
                  {car.available ? (
                    <Link to={`/cars/${car._id}`}>Mais detalhes</Link>
                  ) : (
                    <button className="vendido">vendido</button>
                  )}
                </CarsContainer>
              </Col>
            </>
          ))}
      </Row>
      {}
    </Container>
  );
};

export default Home;
