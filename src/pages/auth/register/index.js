import { useState } from 'react';
import { RegisterContainer, Title } from './styled';
import Input from '../../../components/Input';
import { Link } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({});

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <RegisterContainer>
      <div className="box-left">
        <Title>
          Faça seu registro, encontre as{' '}
          <span className="destaque">melhores marcas.</span>
        </Title>
      </div>
      <div className="box-right">
        <form onSubmit={handleSubmit}>
          <Input
            text="Nome"
            type="text"
            name="name"
            placeholder="Digite seu nome"
            handleOnChange={handleChange}
          />
          <Input
            text="E-mail"
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            handleOnChange={handleChange}
          />
          <Input
            text="Senha"
            type="password"
            name="password"
            placeholder="Digite sua senha"
            handleOnChange={handleChange}
          />
          <Input
            text="Confirmação de senha"
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            handleOnChange={handleChange}
          />
          <input type="submit" value="Cadastrar" />
        </form>
        <p>
          Já tem conta ? <Link to="/login">click aqui!</Link>
        </p>
      </div>
    </RegisterContainer>
  );
};

export default Register;
