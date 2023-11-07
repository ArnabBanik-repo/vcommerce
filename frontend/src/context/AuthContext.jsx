import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getMe(){
      axios.get(`http://localhost:5000/api/v1/users/me`, {withCredentials: true})
      .then(res => setUser(res.data.data))
      .catch(err => {})
    }
    getMe();
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    axios.get(`http://localhost:5000/api/v1/users/logout`, {withCredentials: true})
    .then(_ => {
      setUser(null);
      navigate('/')
    })
    .catch(err => console.error(err))
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
