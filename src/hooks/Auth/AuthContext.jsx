import Cookies from 'js-cookie';
import React, { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { notify, notifyError } from '../../components/ScreenMessages/Toastify';
import { login as selfLogin } from '../../service/Auth/AuthService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const isAuthenticated = () => {
    return Cookies.get('authToken') !== undefined;
  };

  const login = async (request) => {
    const response = await selfLogin(request);

    if (response && response.status) {
      notify('Giriş işlemi Başarılı, yönlendiriliyorsunuz...');
      Cookies.set('authToken', response?.data.token);

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      notifyError('Bilgiler hatalıdır ! lütfen kontrol ediniz...');
    }
  };

  const logout = () => {
    Cookies.remove('authToken');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
