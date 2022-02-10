import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { ProfileContainer, Title } from './styled';
import Input from '../../../components/Input';
import api from '../../../utils/api';

const Profile = () => {
  const [user, setUser] = useState({});
  const [token] = useState(localStorage.getItem('token') || '');

  /** recuperar os dados do usuário */
  useEffect(() => {
    api
      .get('/users/checkUser', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => setUser(response.data));
  }, [token]);

  function onFileChange() {
    //
  }

  function handleChange() {
    //
  }

  return (
    <ProfileContainer>
      <Container>
        <Title>Perfil</Title>
        <p>preview da imagem</p>
        <form>
          <Input
            text="image"
            type="file"
            name="image"
            handleOnChange={onFileChange}
          />
          <Input
            text="E-mail"
            type="email"
            name="email"
            placeholder="Digite seu email"
            handleOnChange={handleChange}
            value={user.email || ''}
          />
          <Input
            text="Nome"
            type="text"
            name="name"
            placeholder="Digite seu nome"
            handleOnChange={handleChange}
            value={user.name || ''}
          />
          <Input
            text="Senha"
            type="password"
            name="password"
            placeholder="Digite sua senha"
            handleOnChange={handleChange}
          />
          <Input
            text="Confirmação sua senha"
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            handleOnChange={handleChange}
          />
          <input type="submit" value="Editar" />
        </form>
      </Container>
    </ProfileContainer>
  );
};

export default Profile;
