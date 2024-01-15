import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import env from "../config";

const Login = () => {
  const [id, setid] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { user, login: authLogin, logout: authLogout } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${env.BACKEND_URI}/api/v1/users/login`,
        {
          id,
          password,
        }, { withCredentials: true }
      );

      if (response.data.status === "success") {
        authLogin(response.data.user);
        navigate('/products');
      } else {
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleLogout = () => {
    authLogout();
  }

  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 13vh)" }}
    >
      <form onSubmit={() => { user ? handleLogout() : handleLogin() }} className="opacity-70 p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Roll Number</label>
          <input value={id}
            onChange={(e) => setid(e.target.value)}
            className="w-full py-2 px-3 bg-gray-200 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:border-2"
            disabled = {user?true:false}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-2 px-3 bg-gray-200 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:border-2"
            disabled = {user?true:false}
            required
          />
        </div>

        {
          user ?
            <button
              onClick={handleLogout}
              className={'w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none'}>
              Logout
            </button>
            :
            <button
              onClick={handleLogin}
              className={'w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none'}>
              Login
            </button>
        }

        {user && (
          <div className="mt-4 text-center">
            <p className="text-gray-500">Logged in as: {user.first_name} {user.last_name}</p>
          </div>
        )}

        <div className="flex gap-4 mt-1">
          <Link to="/register" className="text-green-800 text-sm">
            Register New User
          </Link>
          <Link to="/forgotPassword" className="text-sm">
            Forgot Password?
          </Link>
        </div>

      </form>


    </div>
  );
};

export default Login;
