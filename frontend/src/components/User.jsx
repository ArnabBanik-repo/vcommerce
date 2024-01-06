import React, { useEffect, useState } from 'react';
import { MdEditNote } from "react-icons/md";
import EditUser from './EditUser';
import ChangePassword from './ChangePassword';

const User = ({ user }) => {

  const [update, setUpdate] = useState(false);
  const [visible, setVisible] = useState(false);
  const [change, setChange] = useState(false);

  const handleUpdate = () => setUpdate(() => !update);
  const handleVisible = () => setVisible(() => !visible);
  const handleChange = () => setChange(() => !change);

  if (update)
    return <EditUser handleUpdate={handleUpdate} />

  if (change)
    return <ChangePassword handleChange={handleChange} />

  return (
    <div className="relative w-full pt-10 px-10 bg-cover bg-center" style={{ backgroundImage: "url('./userinfoback.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative w-full h-96 grid place-items-center text-center">
        <h1 className="font-bold text-5xl text-white">
          {user && user.first_name.toUpperCase()} {user && user.last_name.toUpperCase()}
        </h1>

        <div className="-mt-32 text-white">
          {user && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex gap-1 mb-4">
                  <p className="text-xl font-semibold mb-1">Roll No: &nbsp;</p>
                  <p className="text-xl uppercase">{user.roll}</p>
                </div>

                <div className="flex gap-1 mb-4">
                  <label className="block text-xl font-semibold mb-1">Phone Number: &nbsp;</label>
                  <p className="text-xl">{user.phone}</p>
                </div>
              </div>

              <div>
                <div className="flex gap-1 mb-4">
                  <label className="block text-xl font-semibold mb-1">Address: &nbsp;</label>
                  <p className="text-xl capitalize">{user.address}</p>
                </div>

                <div className="flex gap-1 mb-4">
                  <label className="block text-xl font-semibold mb-1">Email: &nbsp;</label>
                  <p className="text-xl">{user.email}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`absolute bottom-20 right-10 bg-gray-200 w-44 rounded-md transition-all ${visible ? 'opacity-1' : 'opacity-0'}`}>
        <p className='h-16 px-4 flex items-center border-b border-gray-400 hover:bg-gray-300 rounded-md cursor-pointer transition-all' onClick={handleUpdate}>Edit Profile</p>
        <p className='h-16 px-4 flex items-center hover:bg-gray-300 rounded-md cursor-pointer transition-all' onClick={handleChange}>Change Password</p>
      </div>

      <div className="absolute bottom-5 right-10" onClick={handleVisible}>
        <button className="bg-white outline-none border-none text-xl text-black px-3 py-3 rounded-full hover:bg-gray-300">
          <MdEditNote />
        </button>
      </div>
    </div>
  );
};

export default User;
