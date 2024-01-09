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
    <div className="w-full" >
      <div className="relative w-full h-96 grid place-items-center text-center bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url("./userinfoback.jpg")', zIndex: -3}}>
        <h1 className="font-bold text-4xl md:text-5xl text-white">
          {user && user.first_name.toUpperCase()} {user && user.last_name.toUpperCase()}
        </h1>

        <div className="-mt-24 md:-mt-32 text-white">
          {user && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex gap-1 mb-4">
                  <p className="md:text-xl font-semibold mb-1">Roll No: &nbsp;</p>
                  <p className="md:text-xl uppercase">{user.roll}</p>
                </div>

                <div className="flex gap-1 mb-4">
                  <label className="md:text-xl font-semibold mb-1">Phone Number: &nbsp;</label>
                  <p className="md:text-xl">{user.phone}</p>
                </div>
              </div>

              <div>
                <div className="-mt-4 md:-mt-0 flex gap-1 mb-4">
                  <label className="md:text-xl font-semibold mb-1">Address: &nbsp;</label>
                  <p className="md:text-xl capitalize">{user.address}</p>
                </div>

                <div className="flex gap-1 mb-4">
                  <label className="md:text-xl font-semibold mb-1">Email: &nbsp;</label>
                  <p className="md:text-xl">{user.email}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`relative md:absolute top-5 -right-3 md:top-[30%] md:right-20 bg-gray-200 w-44 rounded-md transition-all ${visible ? 'block' : 'hidden'}`}>
        <p className='h-16 px-4 flex items-center border-b border-gray-400 hover:bg-gray-300 rounded-md cursor-pointer transition-all' onClick={handleUpdate}>Edit Profile</p>
        <p className='h-16 px-4 flex items-center hover:bg-gray-300 rounded-md cursor-pointer transition-all' onClick={handleChange}>Change Password</p>
      </div>

      <div className="relative md:absolute -top-48 right-0 md:top-[45%] md:right-16" onClick={handleVisible}>
        <button className="bg-white outline-none border-none text-xl text-black px-3 py-3 rounded-full hover:bg-gray-300">
          <MdEditNote />
        </button>
      </div>
    </div>
  );
};

export default User;
