import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../components/User';
import Listed from '../components/Listed';
import AccessDenied from './AccessDenied';
import env from '../config';
const UserInfo = () => {
  const [user, setUser] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${env.BACKEND_URI}/api/v1/users/me`, { withCredentials: true });

        if (response.data.status === 'success') {
          setUser(response.data.data);
        } else {
          console.error('Error fetching user data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {user ? (
        <>
          <User user={user} />
          <Listed products={user.products} />
        </>
      ) : 
      <AccessDenied />
      }
    </>
  );
};

export default UserInfo;
