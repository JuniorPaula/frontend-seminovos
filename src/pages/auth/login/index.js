import { LoginContainer } from './styled';
import Input from '../../../components/Input';
import { Link } from 'react-router-dom';
import LogoLogin from '../../../assets/img/logo-login.png';

const Login = () => {
  function handleChange() {
    //
  }

  return (
    <LoginContainer>
      <div className="box-left">
        <img src={LogoLogin} className="img-fluid" />
      </div>
      <div className="box-right">
        <h2>Seja bem vindo!</h2>
        <form>
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
          Ainda não tem conta ? <Link to="/login">click aqui!</Link>
        </p>
      </div>
    </LoginContainer>
  );
};

export default Login;
