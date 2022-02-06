import { Link } from 'react-router-dom';
import { HeaderContainer, Navbar } from './styled';
import Logo from '../../assets/img/logo.png';

const Header = () => {
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
          <li>
            <Link to="/login">Entrar</Link>
          </li>
          <li>
            <Link to="/register">Cadastrar</Link>
          </li>
        </ul>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
