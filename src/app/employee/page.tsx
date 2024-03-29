"use client"
import React, { useState, useEffect } from 'react';
import { graphqlClient } from '../../../clients/api';
import { addMilkData, addRawData } from '../../../graphql/mutation';
import { getFarmer } from '../../../graphql/query/user';
import Backgroundimg from '../components/Backgroundimg';

// import axios from 'axios'; // You can use axios or any other HTTP client for API requests

const EmployeeDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [messages, setMessages] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [isMilkFormVisible, setIsMilkFormVisible] = useState(false);
  const [isRawMaterialFormVisible, setIsRawMaterialFormVisible] = useState(false);

//   useEffect(() => {
    // Fetch data from your backend API
//     const fetchData = async () => {
//       try {
//         const tasksResponse = await axios.get('/api/tasks');
//         setTasks(tasksResponse.data);
        
//         const messagesResponse = await axios.get('/api/messages');
//         setMessages(messagesResponse.data);
        
//         const scheduleResponse = await axios.get('/api/schedule');
//         setSchedule(scheduleResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//milk start
const [milkDataForm, setMilkDataForm] = useState({
    farmerId: '',
    quantity: '',
    date: '',
    price: '',
    amt: ''
  });

  const handleMilkFormChange = (e:any) => {
    const { name, value } = e.target;
    setMilkDataForm({
      ...milkDataForm,
      [name]: value
    });

    // Calculate amount when price is entered
    // if (name === 'price') {
    //   const quantity = milkDataForm.quantity;
    //   const price = value;
    //   const amount = parseFloat(quantity) * parseFloat(price);
    //   setMilkDataForm({
    //     ...milkDataForm,
    //     amt: isNaN(amount) ? '' : amount.toFixed(2)
    //   });
    // }
  };

  const handleMilkFormSubmit = async (e:any) => {
    e.preventDefault();
    try {
      // Send POST request to your backend API to add milk data
      
      const payload= {
        amt: parseInt(milkDataForm.price)*parseInt(milkDataForm.quantity),
        date: milkDataForm.date,
        farmerId: parseInt(milkDataForm.farmerId),
        price: parseInt(milkDataForm.price),
        quantity: parseInt(milkDataForm.quantity)
      }
        graphqlClient.request(addMilkData,{payload:payload})
      // Reset form fields after successful submission
      alert("milk data added")
      setMilkDataForm({
        farmerId: '',
        quantity: '',
        date: '',
        price: '',
        amt: ''
      });
    } catch (error) {
      console.error('Error submitting milk data:', error);
    }
  };
//milk end
  
//raw start
const [rawMaterialForm, setRawMaterialForm] = useState({
    farmerId: '',
    feed: '',
    drug: '',
    cowId: ''
  });
 
  const [cows, setCows] = useState<(number | null | undefined)[]>([]);

  useEffect(() => {
    if (rawMaterialForm.farmerId !== '') {
      fetchCowsByFarmerId(rawMaterialForm.farmerId);
    }
  }, [rawMaterialForm.farmerId]);

  const fetchCowsByFarmerId = async (farmerId: string) => {
    const pd={
      id:parseInt(farmerId)
    }
    const data=await graphqlClient.request(getFarmer,{token:pd})
    if(data.getFarmer?.cow){
      const cows=data.getFarmer.cow
      const ids= cows.map((cow)=>{return(cow?.id)})
     if(ids)
     {
         setCows(ids)
     }
    } 
    
  };

  const handleRawMaterialFormChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setRawMaterialForm({
      ...rawMaterialForm,
      [name]: value
    });
  };

  const handleRawMaterialFormSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      // Send POST request to your backend API to add raw material data
     
      const rawdata={
        cowId: parseInt(rawMaterialForm.cowId),
        drug: rawMaterialForm.drug,
        farmerId: parseInt(rawMaterialForm.farmerId),
        feed: rawMaterialForm.feed
      }

      await graphqlClient.request(addRawData,{payload:rawdata})
      // Reset form fields after successful submission
      alert("data submitted")
      setRawMaterialForm({
        farmerId: '',
        feed: '',
        drug: '',
        cowId: ''
      });
    } catch (error) {
      console.error('Error submitting raw material data:', error);
    }
  };
//raw end


const toggleMilkForm = () => {
    setIsMilkFormVisible(!isMilkFormVisible);
    setIsRawMaterialFormVisible(false); // Hide raw material form when toggling to milk form
  };

  const toggleRawMaterialForm = () => {
    setIsRawMaterialFormVisible(!isRawMaterialFormVisible);
    setIsMilkFormVisible(false); // Hide milk form when toggling to raw material form
  };

  return (
    <div className="container mx-auto">
      <Backgroundimg/>
      <h1 className="text-3xl font-bold my-8 text-center">Employee Dashboard</h1>

      <div className="flex justify-center mb-8">
        <button
          className={`mr-4 px-4 py-2 rounded-md ${isMilkFormVisible ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={toggleMilkForm}
        >
          Milk Form
        </button>
        <button
          className={`px-4 py-2 rounded-md ${isRawMaterialFormVisible ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={toggleRawMaterialForm}
        >
          Raw Material Form
        </button>
      </div>

      {/* Render Milk Form */}
      {isMilkFormVisible && (
       <form onSubmit={handleMilkFormSubmit} className="my-8 border rounded-md p-4">
       <h2 className="text-lg font-semibold mb-4">Enter Milk Data</h2>
       <div className="mb-4">
         <label htmlFor="farmerId" className="block font-semibold mb-1">Farmer ID:</label>
         <input
           type="text"
           id="farmerId"
           name="farmerId"
           value={milkDataForm.farmerId}
           onChange={handleMilkFormChange}
           className="border rounded-md px-3 py-2 w-full"
           required
         />
       </div>
       <div className="mb-4">
         <label htmlFor="quantity" className="block font-semibold mb-1">Quantity:</label>
         <input
           type="text"
           id="quantity"
           name="quantity"
           value={milkDataForm.quantity}
           onChange={handleMilkFormChange}
           className="border rounded-md px-3 py-2 w-full"
           required
         />
       </div>
       <div className="mb-4">
         <label htmlFor="date" className="block font-semibold mb-1">Date:</label>
         <input
           type="date"
           id="date"
           name="date"
           value={milkDataForm.date}
           onChange={handleMilkFormChange}
           className="border rounded-md px-3 py-2 w-full"
           required
         />
       </div>
       <div className="mb-4">
         <label htmlFor="price" className="block font-semibold mb-1">Price:</label>
         <select
           id="price"
           name="price"
           value={milkDataForm.price}
           onChange={handleMilkFormChange}
           className="border rounded-md px-3 py-2 w-full"
          
         >
           <option value="">Select Price</option>
           <option value="35">35</option>
           <option value="32">32</option>
           <option value="29">29</option>
         </select>
       </div>
       <div className="mb-4">
         <label htmlFor="amt" className="block font-semibold mb-1">Amount:</label>
         <input
           type="text"
           id="amt"
           name="amt"
           value={parseFloat(milkDataForm.quantity)*parseFloat(milkDataForm.price)}
           onChange={handleMilkFormChange}
           className="border rounded-md px-3 py-2 w-full"
           readOnly // Making the amount field read-only
         />
       </div>
       <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
     </form>
      )}

      {/* Render Raw Material Form */}
      {isRawMaterialFormVisible && (
        <form onSubmit={handleRawMaterialFormSubmit} className="my-8 border rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">Enter Raw Material Data</h2>
        <div className="mb-4">
          <label htmlFor="farmerId" className="block font-semibold mb-1">Farmer ID:</label>
          <input
            type="text"
            id="farmerId"
            name="farmerId"
            value={rawMaterialForm.farmerId}
            onChange={handleRawMaterialFormChange}
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="feed" className="block font-semibold mb-1">Feed:</label>
          <input
            type="text"
            id="feed"
            name="feed"
            value={rawMaterialForm.feed}
            onChange={handleRawMaterialFormChange}
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="drug" className="block font-semibold mb-1">Drug:</label>
          <input
            type="text"
            id="drug"
            name="drug"
            value={rawMaterialForm.drug}
            onChange={handleRawMaterialFormChange}
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cowId" className="block font-semibold mb-1">Cow ID:</label>
          <select
            id="cowId"
            name="cowId"
            value={rawMaterialForm.cowId}
            onChange={handleRawMaterialFormChange}
            className="border rounded-md px-3 py-2 w-full"
            required
          >
            <option value="">Select Cow</option>
          {
            cows?.map((cow)=>{return(<option key={cow}>{cow}</option>)})
          }
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
      </form>
      )}

      {/* Render tasks, messages, and schedule sections */}
      {/* ... */}
    </div>
  );
};

export default EmployeeDashboard;
