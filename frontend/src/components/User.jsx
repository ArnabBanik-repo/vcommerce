import React from 'react';

const UserInfo = () => {
  const userData = {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '123-456-7890',
    address: '123 Main St, Cityville',
  };

  return (
    <div className="flex items-center justify-center">
      <div className="paddings">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">First Name:</label>
          <p className="text-sm">{userData.firstName}</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Last Name:</label>
          <p className="text-sm">{userData.lastName}</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Phone Number:</label>
          <p className="text-sm">{userData.phoneNumber}</p>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Address:</label>
          <p className="text-sm">{userData.address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
