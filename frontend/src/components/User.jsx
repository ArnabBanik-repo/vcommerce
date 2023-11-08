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
    <div className="w-1/2 pt-10 px-10">
      <div className='border border-black w-min w-96 h-96 grid place-items-center'>
      <h1 className='font-bold text-xl'>Profile Information</h1>
        <div className='-mt-32'>
        {userData && (
          <>
            <div className="flex gap-1 mb-4">
              <p className="text-sm font-semibold mb-1">Name:</p>
              <p className="text-sm capitalize">{userData.first_name} {userData.last_name}</p>
            </div>

            <div className="flex gap-1 mb-4">
              <label className="block text-sm font-semibold mb-1">Phone Number:</label>
              <p className="text-sm">{userData.phone}</p>
            </div>

            <div className="flex gap-1 mb-4">
              <label className="block text-sm font-semibold mb-1">Address:</label>
              <p className="text-sm capitalize">{userData.address}</p>
            </div>

            <div className="flex gap-1 mb-4">
              <label className="block text-sm font-semibold mb-1">Email:</label>
              <p className="text-sm">{userData.email}</p>
            </div>
          </>
        )}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
