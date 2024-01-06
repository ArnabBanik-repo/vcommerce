import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userFavourites, setUserFavourites] = useState(null);

  useEffect(() => {
    async function getUser(){
      axios.get(`http://localhost:5000/api/v1/users/me`, {withCredentials: true})
      .then(res => setUser(res.data.data))
      .catch(err => {})
    }
    if(!user) getUser();
  }, []);

  useEffect(() => {
    async function getUserFav(){
      axios.get(`http://localhost:5000/api/v1/users/favourites`, {withCredentials: true})
      .then(res => {
        setUserFavourites(res.data.data.products)
      })
      .catch(err => {})
    }
    getUserFav();
  }, [user])

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    axios.get(`http://localhost:5000/api/v1/users/logout`, {withCredentials: true})
    .then(_ => {
      alert("Logged out");
      setUser(null);
      setUserFavourites(null);
      navigate('/')
    })
    .catch(err => console.error(err))
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, userFavourites, setUserFavourites }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
