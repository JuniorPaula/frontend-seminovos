import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { ImageContainer, ProfileContainer, Title } from './styled';
import { toast } from 'react-toastify';
import { Image } from 'react-bootstrap';
import Input from '../../../components/Input';
import api from '../../../utils/api';

const Profile = () => {
  const [user, setUser] = useState({});
  const [preview, setPreiew] = useState('');
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

  function onFileChange(e) {
    setPreiew(e.target.files[0]);
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    await Object.keys(user).forEach((key) => formData.append(key, user[key]));

    await api
      .patch(`/users/edit/${user._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'Multipart/form-data',
        },
      })
      .then((response) => {
        toast.success('Atualização realizada com sucesso!', {
          theme: 'dark',
          toastId: 'success',
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
    <ProfileContainer>
      <Container>
        <Title>Perfil</Title>
        {(user.image || preview) && (
          <ImageContainer>
            <Image
              className="rounded-circle image-profile"
              src={
                preview
                  ? URL.createObjectURL(preview)
                  : `${process.env.API_URL}/images/users/${user.image}`
              }
              alt={user.name}
            />
          </ImageContainer>
        )}
        <form onSubmit={handleSubmit}>
          <Input
            text="Imagem"
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
