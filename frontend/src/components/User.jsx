import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const UserInfo = () => {
  const {user} = useAuth()
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(user){
          setUserData(user);
          return;
        }
        const response = await axios.get('http://localhost:5000/api/v1/users/me',{withCredentials:true});

        if (response.data.status === 'success') {
          setUserData(response.data.data);
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
    <div className="flex items-center justify-center">
      <div className="paddings">

        {userData && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Name:</label>
              <p className="text-sm capitalize">{userData.first_name} {userData.last_name}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Phone Number:</label>
              <p className="text-sm">{userData.phone}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Address:</label>
              <p className="text-sm capitalize">{userData.address}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Email:</label>
              <p className="text-sm">{userData.email}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
