"use client"
import React, { useState, useEffect } from 'react';
import { graphqlClient } from '../../../clients/api';
import { getFarmer } from '../../../graphql/query/user';
import Backgroundimg from '../components/Backgroundimg';
// You can use axios or any other HTTP client for API requests

const Dashboard = async () => {
  const [cows, setCows] = useState([]);
  const [rawMaterials, setRawMaterials] = useState([]);
  const [milkData, setMilkData] = useState([]);

  // useEffect(() => {
  //   // Fetch data from your backend API
  //   const fetchData = async () => {
  //     try {
  //       const cowsResponse = await axios.get('/api/cows');
  //       setCows(cowsResponse.data);
        
  //       const rawMaterialsResponse = await axios.get('/api/rawMaterials');
  //       setRawMaterials(rawMaterialsResponse.data);
        
  //       const milkDataResponse = await axios.get('/api/milkData');
  //       setMilkData(milkDataResponse.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  
  const pd={
    id:1
  }
   const data= await graphqlClient.request(getFarmer,{token:pd})
   
  console.log(data.getFarmer?.cow)
  return (
    <div className="container mx-auto">
      <Backgroundimg/>
      <h1 className="text-3xl font-bold my-8 text-center">Farm Dashboard</h1>

      {/* Render cow information */}
      <div className="my-8 border rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">Cows Information</h2>
        <ul>
          {/* {cows.map(cow => (
            <li key={cow.id} className="mb-2">
              Cow ID: {cow.id}, Age: {cow.age}, Vaccination: {cow.vaccination}
            </li>
          ))} */}
        </ul>
      </div>

      {/* Render raw material data */}
      <div className="my-8 border rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">Raw Material Data</h2>
        <ul>
          {/* {rawMaterials.map(material => (
            <li key={material.id} className="mb-2">
              Feed: {material.feed}, Drug: {material.drug}
            </li>
          ))} */}
        </ul>
      </div>

      {/* Render milk data */}
      <div className="my-8 border rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">Milk Data</h2>
        <ul>
          {/* {milkData.map(milk => (
            <li key={milk.id} className="mb-2">
              Quantity: {milk.quantity}, Date: {milk.date}, Price: {milk.price}, Amount: {milk.amt}
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  ); 
};
  
export default Dashboard;
