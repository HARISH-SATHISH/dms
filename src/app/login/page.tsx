"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { graphqlClient } from '../../../clients/api';
import { verifyEmp, verifyFarmer } from '../../../graphql/query/user';
import Backgroundimg from '../components/Backgroundimg';
import { useGlobalContext } from '../context/store';

const Login: React.FC = () => {
  const router = useRouter()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {userId,setUserId}=useGlobalContext()

const creddata={
  id:parseInt(username),
  pass:password
}

  const handleFarmerLogin = async () => {
  const farmer=await graphqlClient.request(verifyFarmer,{payload:creddata})
  
  if(farmer.verifyFarmer?.id){
    setUserId(`${farmer.verifyFarmer.id}`)
  
    router.push('/farmer')
  }

  else{
    alert("wrong credentials")
  }
  };




  const handleEmployeeLogin = async () => {
    const farmer=await graphqlClient.request(verifyEmp,{payload:creddata})
  
  if(farmer.verifyEmp?.id){
  
  
    router.push('/employee')
  }

  else{
    alert("wrong credentials")
  }
  };


    return( 
    <div className="flex justify-center items-center h-screen">
      <Backgroundimg/>
    <div className="bg-gray-100 p-8 rounded shadow-md">
      <h2 className="text-2xl mb-4 text-center">Login</h2>
      <div className="mb-4">
        <label htmlFor="username" className="block mb-1">LoginId:</label>
        <input
          type="number"
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
      <button onClick={handleFarmerLogin} className="w-full bg-green-500 text-white rounded px-4 py-2 mb-2">Login as Farmer</button>
      <button onClick={handleEmployeeLogin} className="w-full bg-blue-500 text-white rounded px-4 py-2">Login as Employee</button>
    </div>
  </div>)
  
};

export default Login;
