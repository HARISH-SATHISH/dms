"use client"
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFarmerLogin = () => {
    // You can add your login logic here for farmer login
    if (username === 'farmer' && password === 'password') {
      // If login is successful, redirect or perform any other action
      alert('Login successful as farmer!');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleEmployeeLogin = () => {
    // You can add your login logic here for employee login
    if (username === 'employee' && password === 'password') {
      // If login is successful, redirect or perform any other action
      alert('Login successful as employee!');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button onClick={handleFarmerLogin} className="w-full bg-blue-500 text-white rounded px-4 py-2 mb-2">Login as Farmer</button>
        <button onClick={handleEmployeeLogin} className="w-full bg-green-500 text-white rounded px-4 py-2">Login as Employee</button>
      </div>
    </div>
  );
};

export default Login;
