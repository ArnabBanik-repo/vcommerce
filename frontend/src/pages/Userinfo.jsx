import React from 'react';
import User from '../components/User';
import Listed from '../components/Listed';
import { useAuth } from '../context/AuthContext';

const UserInfo = () => {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          <User />
          <Listed />
        </>
      ) : (
        <p className="text-gray-500">Please Log in</p>
      )}
    </>
  );
};

export default UserInfo;
