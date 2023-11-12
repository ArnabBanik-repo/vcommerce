import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../components/User';
import Listed from '../components/Listed';

const UserInfo = () => {
  const [user, setUser] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/users/me', { withCredentials: true });

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
          <User user={user}/>
          <Listed products={user.products}/>
        </>
      ) : (
        <p className="text-gray-500">Please Log in</p>
      )}
    </>
  );
};

export default UserInfo;
