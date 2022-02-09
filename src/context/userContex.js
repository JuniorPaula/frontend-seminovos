import PropTypes from 'prop-types';
import { createContext } from 'react';
import useAuth from '../hooks/useAuth';

const Context = createContext();

function UserProvider({ children }) {
  const { authenticated, register, logOut, login } = useAuth();

  return (
    <Context.Provider value={{ authenticated, register, logOut, login }}>
      {children}
    </Context.Provider>
  );
}

export { Context, UserProvider };

UserProvider.propTypes = {
  children: PropTypes.shape({}),
};
