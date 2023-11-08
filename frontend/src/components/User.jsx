import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
const User = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          setUserData(user);
          return;
        }
        const response = await axios.get('http://localhost:5000/api/v1/users/me', { withCredentials: true });

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
    <div className="relative w-full pt-10 px-10 bg-cover bg-center" style={{ backgroundImage: "url('./userinfoback.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative w-full h-96 grid place-items-center text-center">
        <h1 className="font-bold text-5xl text-white">
          {userData && userData.first_name.toUpperCase()} {userData && userData.last_name.toUpperCase()}
        </h1>

        <div className="-mt-32 text-white">
          {userData && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex gap-1 mb-4">
                  <p className="text-xl font-semibold mb-1">Roll No: &nbsp;</p>
                  <p className="text-xl uppercase">{userData.roll}</p>
                </div>

                <div className="flex gap-1 mb-4">
                  <label className="block text-xl font-semibold mb-1">Phone Number: &nbsp;</label>
                  <p className="text-xl">{userData.phone}</p>
                </div>
              </div>

              <div>
                <div className="flex gap-1 mb-4">
                  <label className="block text-xl font-semibold mb-1">Address: &nbsp;</label>
                  <p className="text-xl capitalize">{userData.address}</p>
                </div>

                <div className="flex gap-1 mb-4">
                  <label className="block text-xl font-semibold mb-1">Email: &nbsp;</label>
                  <p className="text-xl">{userData.email}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;