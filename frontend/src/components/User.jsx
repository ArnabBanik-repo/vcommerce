import React from 'react';
const User = ({user}) => {

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
    </div>
  );
};

export default User;
