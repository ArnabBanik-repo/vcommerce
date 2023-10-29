import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [id, setid] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        {
          id,
          password,
        }
      );

      // Handle the response as needed, e.g., store user token in state or localStorage
      console.log("Login successful:", response.data);
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }
  };

  return (
    <div
      className="flex items-center justify-center  bg-black text-white"
      style={{ minHeight: "calc(100vh - 13vh)" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 opacity-70 p-8 rounded-md shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium">
            id Number
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={(e) => setid(e.target.value)}
            className="w-full py-2 px-3 bg-gray-800 text-white rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
