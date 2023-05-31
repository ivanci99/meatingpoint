import React, { useState } from "react";

import HeaderClear from '../../../../components/Header/HeaderClear';


const ButcheryShopCreate = () => {
    
    const [formData, setFormData] = useState({
        butchery:"",
        street:"",
        streetNumber:"",
        postcode:"",
        city:"",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://meating-point.innofabrik.de/api/butchery_shops', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
    
          const data = await response.json();
          console.log(data); 
          setFormData({
            butchery:"",
            street:"",
            streetNumber:"",
            postcode:"",
            city:"",
          });
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
                 <label className="block text-gray-700 text-sm font-bold mb-1"> Metzgerei </label>
                 <input onChange={handleChange} value={formData.butchery} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="butchery"
                        type="text"
                        placeholder="Metzgerei"
                  />
             </div>
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1"> Straße </label>
                 <input onChange={handleChange} value={formData.street} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="street"
                         type="text"
                         placeholder="Straße"
                 />
             </div>
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1" > Hausnummer </label>
                 <input onChange={handleChange} value={formData.streetNumber} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="streetNumber"
                         type="text"
                         placeholder="Hausnummer"
                 />
             </div>
             <div className="mb-3">
             <label className="block text-gray-700 text-sm font-bold mb-1" > Postleitzahl </label>
                 <input onChange={handleChange} value={formData.postcode} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="postcode"
                         type="text"
                         placeholder="Postleitzahl"
                 />
             </div>
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1"> Stadt </label>
                 <input onChange={handleChange} value={formData.city} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="city"
                         type="text"
                         placeholder="Stadt"
                 />
             </div>
    
             <div className="flex items-center justify-between">
                <button type="submit" className="inline-flex flex-wrap text-white bg-gray-500 border-0 py-2 px-6 outline outline-offset-2 outline-2 hover:bg-red-500 rounded-full text-lg"
                        > Anlegen
                 </button>
             </div>
         </form>
        </div>
   </div>
    )
}

export default ButcheryShopCreate