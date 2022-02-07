import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { toast } from 'react-toastify';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    /** se o token vier do localstorage, setar como default
     *  no cabeçalho da requisição */
    if (token) {
      api.defaults.headers.Authoziration = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
  }, []);

  async function register(user) {
    try {
      const data = await api.post('/users/register', user).then((response) => {
        return response.data;
      });

      authUser(data);
    } catch (err) {
      const msgErr = err.response.data.message;
      toast.error(msgErr, { theme: 'dark', toastId: 'err_api' });
      return;
    }

    toast.success('Cadastro realizado com sucesso!', {
      theme: 'dark',
      toastId: 'success',
    });
  }

  async function authUser(data) {
    setAuthenticated(true);

    /** salvar o token no localstorage */
    localStorage.setItem('token', JSON.stringify(data.token));

    /** redirecionar para home */
    navigate('/');
  }

  return { authenticated, register };
};

export default useAuth;
