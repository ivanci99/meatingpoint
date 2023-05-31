import React, { useState } from "react";
import HeaderClear from '../../../../components/Header/HeaderClear';


const ButcheriesCreate = () => {
    
  const [name, setName] = useState('');
  const [responsibleUser, setResponsibleUser] = useState('');
  const [butcheryShops, setButcheryShops] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleResponsibleUserChange = (event) => {
    setResponsibleUser(event.target.value);
  };

  const handleButcheryShopsChange = (event) => {
    const selectedShops = Array.from(event.target.selectedOptions, (option) => option.value);
    setButcheryShops(selectedShops);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      responsibleUser: responsibleUser,
      butcheryShops: butcheryShops,
    };

    try {
      const response = await fetch('http://meating-point.innofabrik.de/api/butcheries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Butchery erfolgreich erstellt
        console.log('Butchery erfolgreich erstellt');
      } else {
        // Fehler beim Erstellen der Butchery
        console.log('Fehler beim Erstellen der Butchery');
      }
    } catch (error) {
      console.error('Fehler beim Senden des Requests:', error);
    }
  };

   
    return (
       <div>
          <HeaderClear/>
        <div className="flex justify-center items-center h-screen">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-1">
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1"> Metzgerei </label>
                 <input onChange={handleNameChange} 
                        value={name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Metzgerei"
                  />
             </div>
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1"> verantwortlicher User </label>
                 <input onChange={handleResponsibleUserChange} 
                        value={responsibleUser} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="responsibleUser"
                         type="text"
                         placeholder="User"
                 />
             </div>
  
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1"> Filialen </label>
                 <input onChange={handleButcheryShopsChange} 
                        value={butcheryShops} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="butcheryShops"
                        type="text"
                        placeholder="Filialen"
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

export default ButcheriesCreate