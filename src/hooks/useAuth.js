//import { useState, useEffect } from 'react';
//import { Navigate } from 'react-router-dom';
import api from '../utils/api';
import { toast } from 'react-toastify';

const useAuth = () => {
  async function register(user) {
    try {
      const data = await api.post('/users/register', user).then((response) => {
        return response.data;
      });

      console.log(data);
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

  return { register };
};

export default useAuth;
