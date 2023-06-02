import React, { useState } from "react";
import Axios from 'axios';
import HeaderClear from '../../../components/Header/HeaderClear';


const CreateProducts = () => {
    
    const [formData, setFormData] = useState({
        name:"",
        description:"",
        price:""
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        const convertedPrice = parseFloat(formData.price);
    
        try {
          const response = await fetch('http://meating-point.innofabrik.de/api/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...formData, price: convertedPrice })
          });
    
          const data = await response.json();
          console.log(data); 
          setFormData({
            name:"",
            description:"",
            price:0.0
          });
          if(response.ok){
          alert("Produkt wurde erfolgreich angelegt")
          }
        } catch (error) {
          console.error(error);
        }
      };

   
    return (
       <div>
          <HeaderClear/>
        <div className="flex justify-center items-center h-screen">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-1">
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1"> Produktname </label>
                 <input onChange={handleChange} value={formData.name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Produktname"
                  />
             </div>
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1"> Beschreibung </label>
                 <input onChange={handleChange} value={formData.description} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                         type="text"
                         placeholder="Produktbeschreibung"
                 />
             </div>
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1" > Preis </label>
                 <input onChange={handleChange} value={formData.price} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="number"
                        step="0.01"
                       
                 />
             </div>
             

             <div className="flex items-center justify-between">
                <button type="submit" className="inline-flex flex-wrap text-white bg-gray-500 border-0 py-2 px-6 outline outline-offset-2 outline-2 hover:bg-red-500 rounded-full text-lg"
                        > Produkt anlegen
                 </button>
             </div>
         </form>
        </div>
   </div>
    )
}

export default CreateProducts