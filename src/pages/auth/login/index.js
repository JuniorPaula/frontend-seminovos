import { useContext, useState } from 'react';
import { LoginContainer } from './styled';
import { Link } from 'react-router-dom';
import Input from '../../../components/Input';
import LogoLogin from '../../../assets/img/logo-login.png';
import { Context } from '../../../context/userContex';

const Login = () => {
  const [user, setUser] = useState({});
  const { login } = useContext(Context);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(user);
  }

  return (
    <LoginContainer>
      <div className="box-left">
        <img src={LogoLogin} className="img-fluid" />
      </div>
      <div className="box-right">
        <h2>Seja bem vindo!</h2>
        <form onSubmit={handleSubmit}>
          <Input
            text="E-mail"
            type="email"
            name="email"
            placeholder="Digite seu email"
            handleOnChange={handleChange}
          />
          <Input
            text="Senha"
            type="password"
            name="password"
            placeholder="Digite sua senha"
            handleOnChange={handleChange}
          />
          <input type="submit" value="Entrar" />
        </form>
        <p>
          Ainda não tem conta ? <Link to="/register">click aqui!</Link>
        </p>
      </div>
    </LoginContainer>
  );
};

export default Login;
