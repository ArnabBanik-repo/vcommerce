import React from 'react';
import User from '../components/User';
import Listed from '../components/Listed';
import { useAuth } from '../context/AuthContext';

const UserInfo = () => {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <div className='px-40 flex justify-center'>
          <User />
          <Listed />
        </div>
      ) : (
        <div className="text-xl font-bold">Please Log in</div>
      )}
    </>
  );
};

export default UserInfo;
