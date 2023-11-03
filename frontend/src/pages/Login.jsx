import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setid] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        {
          id,
          password,
        },{withCredentials:true}
      );

      // Set the login status from the response
      setLoginStatus(response.data.status);

      // Check the status from the response
      if (response.data.status === "success") {
        // You can optionally perform other actions on successful login
        console.log("Login successful!");
        
        navigate('/'); 
      } else {
        // Handle login failure
        console.error("Login failed:", response.data.message);
        // You can optionally display an error message to the user
      }
    } catch (error) {
      // Handle other errors
      console.error("Error during login:", error);
    }
  };

  return (
    <div
      className="flex items-center justify-center bg-black text-white"
      style={{ minHeight: "calc(100vh - 13vh)" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 opacity-70 p-8 rounded-md shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium">
            ID Number
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
          className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none ${
            loginStatus === "success" ? "bg-green-500" : ""
          }`}
        >
          {loginStatus === "success" ? "Login Successful" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
