import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserInfo = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
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
        <h2 className="text-2xl font-bold mb-4">User Information</h2>

        {userData && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">First Name:</label>
              <p className="text-sm">{userData.first_name}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Last Name:</label>
              <p className="text-sm">{userData.last_name}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Phone Number:</label>
              <p className="text-sm">{userData.phone}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Address:</label>
              <p className="text-sm">{userData.address}</p>
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
