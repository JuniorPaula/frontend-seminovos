import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Navbar } from './styled';
import Logo from '../../assets/img/logo.png';
import { Context } from '../../context/userContex';

const Header = () => {
  const { authenticated } = useContext(Context);

  return (
    <HeaderContainer>
      <Navbar>
        <div className="navbar-logo">
          <img src={Logo} alt="Logo Shop car" />
          <h2>Shop car</h2>
        </div>
        <ul>
          <li>
            <Link to="/">Comprar</Link>
          </li>
          {authenticated ? (
            <p>Logado!</p>
          ) : (
            <>
              <li>
                <Link to="/login">Entrar</Link>
              </li>
              <li>
                <Link to="/register">Cadastrar</Link>
              </li>
            </>
          )}
        </ul>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
