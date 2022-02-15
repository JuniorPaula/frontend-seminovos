import { useContext } from 'react';
import { HeaderContainer } from './styled';
import { Context } from '../../context/userContex';
import { FaSignOutAlt } from 'react-icons/fa';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const { authenticated, logOut } = useContext(Context);

  return (
    <HeaderContainer>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <h3 className="text-white">Seminovos</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className="link" href="/">
                Comprar
              </Nav.Link>
              {authenticated ? (
                <>
                  <Nav.Link eventKey={2} className="link" href="/cars/owncars">
                    Meus Carros
                  </Nav.Link>
                  <Nav.Link eventKey={2} className="link" href="/cars/myvisits">
                    Minhas visitas
                  </Nav.Link>
                  <Nav.Link eventKey={2} className="link" href="/user/profile">
                    Perfil
                  </Nav.Link>
                  <Nav.Link eventKey={2} className="link" onClick={logOut}>
                    Sair <FaSignOutAlt />
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link eventKey={2} className="link" href="/login">
                    Entrar
                  </Nav.Link>
                  <Nav.Link eventKey={2} className="link" href="/register">
                    Cadastrar
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
