import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/register",
        {
          first_name: firstName,
          last_name: lastName,
          roll: rollNo,
          email,
          phone: phoneNumber,
          address,
          password,
        }
      );

      if (response.data.status === "success") {
        console.log("Registration successful!");
        navigate('/');
        
      } else {
        console.error("Registration failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-black text-white min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 opacity-70 p-8 rounded-md shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full py-2 px-3 bg-gray-800 text-white rounded-md focus:outline-none focus:border-blue-500"
            required
          />
    
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full py-2 px-3 bg-gray-800 text-white rounded-md focus:outline-none focus:border-blue-500"
            required
          />
    
        </div>

        <div className="mb-4">
          <label htmlFor="rollNo" className="block text-sm font-medium">
            VIT Roll Number
          </label>
          <input
            type="text"
            id="rollNo"
            name="rollNo"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="w-full py-2 px-3 bg-gray-800 text-white rounded-md focus:outline-none focus:border-blue-500"
            required
          />
    
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            VIT Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2 px-3 bg-gray-800 text-white rounded-md focus:outline-none focus:border-blue-500"
            required
          />
    
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium">
            Mobile Number
          </label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full py-2 px-3 bg-gray-800 text-white rounded-md focus:outline-none focus:border-blue-500"
            required
          />
    
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium">
            VIT Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full py-2 px-3 bg-gray-800 text-white rounded-md focus:outline-none focus:border-blue-500"
            required
          />
    
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-2 px-3 bg-gray-800 text-white rounded-md focus:outline-none focus:border-blue-500"
            required
          />
    
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
