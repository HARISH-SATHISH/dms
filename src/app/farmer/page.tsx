"use client"
import React, { useState, useEffect } from 'react';
import { graphqlClient } from '../../../clients/api';
import { getFarmer } from '../../../graphql/query/user';
import Backgroundimg from '../components/Backgroundimg';
import { useGlobalContext } from '../context/store';
// You can use axios or any other HTTP client for API requests

interface cow {
  cid: number | null | undefined;
  cage: number | null | undefined;
  cvac: string | null | undefined;
  chs: string | null | undefined;
}

interface raw{
    cowId: number | null | undefined;
    drug: string | null | undefined;
    feed: string | null | undefined;
    id: number | null | undefined;
}

interface milk{
  amt: string | null | undefined;
    date: string | null | undefined;
    id: number | null | undefined;
    price: string | null| undefined;
    quantity: string | null | undefined;
}
const Dashboard =  () => {
  const cis: cow[] = [];
  const ris:raw[]=[];
  const mis:milk[]=[];
  const [cows, setCows] = useState(cis);
  const [rawMaterials, setRawMaterials] = useState(ris);
  const [milkData, setMilkData] = useState(mis);
  const {userId,setUserId}=useGlobalContext()
  useEffect(() => {
    // Fetch data from your backend API
    const fetchData = async () => {
    
      const pd={
        id:parseInt(userId)
      }
       const data= await graphqlClient.request(getFarmer,{token:pd})


       const cdata=data.getFarmer?.cow?.map((cow)=>{ const c={
           cid:cow?.id,
           cage:cow?.age,
           cvac:cow?.vacination,
           chs:cow?.hstar
       } 
       return c
      })

      if(cdata){setCows(cdata)}

         

      const rdata=data.getFarmer?.raw?.map((raw)=>{
        const r={
          cowId:raw?.cowId,
          drug:raw?.drug,
          farmerId:raw?.farmerId, 
          feed:raw?.feed,
          id:raw?.id
        }
        return r
      })
      if(rdata){setRawMaterials(rdata)}

      console.log(data.getFarmer?.milk)
      
      const mdata=data.getFarmer?.milk?.map((milk)=>{
        const m={
          amt:milk?.amt,
          date:milk?.date,
          id:milk?.id, 
          price:milk?.price,
          quantity:milk?.quantity 
        }
        return m
      }
      )
      if(mdata){setMilkData(mdata)}

    };

   

    fetchData();
  }, []);
  
   
 
  return (
    <div className="container mx-auto">
      <Backgroundimg/>
      <h1 className="text-3xl font-bold my-8 text-center"> Farmer Dashboard</h1>

      {/* Render cow information */}
      <div className="my-8 border rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">Cows Information</h2>
        <table className="border-collapse border border-black w-full">
  <thead className="bg-gray-200">
    <tr>
      <th className="border border-black p-2">Id</th>
      <th className="border border-black p-2">Age</th>
      <th className="border border-black p-2">Vaccination</th>
      <th className="border border-black p-2">Hstar</th>
    </tr>
  </thead>
  <tbody>
    {cows.map(cow => (
      <tr key={cow.cid}>
        <td className="border border-black p-2">{cow.cid}</td>
        <td className="border border-black p-2">{cow.cage}</td>
        <td className="border border-black p-2">{cow.cvac}</td>
        <td className="border border-black p-2">{cow.chs}</td>
      </tr>
    ))}
  </tbody>
</table>


      </div>

      {/* Render raw material data */}
      <div className="my-8 border rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">Raw Material Data</h2>
        <table className="border-collapse border border-black w-full">
  <thead className="bg-gray-200">
    <tr>
      <th className="border border-black p-2">Cow ID</th>
      <th className="border border-black p-2">Drug</th>

      <th className="border border-black p-2">Feed</th>
      <th className="border border-black p-2">ID</th>
    </tr>
  </thead>
  <tbody>
     {rawMaterials.map((raw)=>{return( <tr key={raw.id}>
        <td className="border border-black p-2">{raw.cowId}</td>
        <td className="border border-black p-2">{raw.drug}</td>
        <td className="border border-black p-2">{raw.feed}</td>
        <td className="border border-black p-2">{raw.id}</td>
      </tr>)})}
  </tbody>
</table>

      </div>

      {/* Render milk data */}
      <div className="my-8 border rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">Milk Data</h2>

<table className="border-collapse border border-black w-full">
  <thead className="bg-gray-200">
    <tr>
      <th className="border border-black p-2">Date</th>
      <th className="border border-black p-2">Quantity</th>
      <th className="border border-black p-2">Price</th>
      <th className="border border-black p-2">Amount</th>
    </tr>
  </thead>
  <tbody>
    {milkData.map(milk => (
      <tr key={milk.id}>
        <td className="border border-black p-2">{milk.date}</td>
        <td className="border border-black p-2">{milk.quantity}</td>
        <td className="border border-black p-2">{milk.price}</td>
        <td className="border border-black p-2">{milk.amt}</td>
      </tr>
    ))}
   
  </tbody>
</table>

      </div>
    </div>
  ); 
};
  
export default Dashboard;
