import React, { useState } from "react";
import Axios from 'axios';
import HeaderClear from '../../../components/Header/HeaderClear';


const Register = () => {
    
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        firstname:"",
        lastname:"",
        dateOfBirth:"",
        street:"",
        streetNumber:"",
        postcode:"",
        city:"",
        phone:"",
        location:"",
        roles:""
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://meating-point.innofabrik.de/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
    
          const data = await response.json();
          console.log(data); 
          setFormData({
            email:"",
            password:"",
            firstname:"",
            lastname:"",
            dateOfBirth:"",
            street:"",
            streetNumber:"",
            postcode:"",
            city:"",
            phone:"",
            location:"",
            roles:""
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
                 <label className="block text-gray-700 text-sm font-bold mb-1"> E-Mail </label>
                 <input onChange={handleChange} value={formData.email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="eMail"
                  />
             </div>
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1"> Passwort </label>
                 <input onChange={handleChange} value={formData.password} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                         type="password"
                         placeholder="Passwort"
                 />
             </div>
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1" > Name </label>
                 <input onChange={handleChange} value={formData.firstname} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstname"
                         type="text"
                         placeholder="Vorname"
                 />
             </div>
             <div className="mb-3">
                 <input onChange={handleChange} value={formData.lastname} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastname"
                         type="text"
                         placeholder="Nachname"
                 />
             </div>
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1"> Geburtsdatum </label>
                 <input onChange={handleChange} value={formData.dateOfBirth} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="dateOfBirth"
                         type="date"
                         placeholder="Geburtstag"
                 />
             </div>
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1"> Anschrift </label>
                 <input onChange={handleChange} value={formData.street} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="street"
                         type="text"
                         placeholder="Adresse"
                 />
                 
             </div>
             <div className="mb-3">
                 <input onChange={handleChange} value={formData.streetNumber} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="streetNumber"
                         type="text"
                         placeholder="Hausnummer"
                 />
             </div>
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1"> Postleitzahl / Stadt  </label>
                 <input onChange={handleChange} value={formData.postcode} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="postcode"
                         type="text"
                         placeholder="Postleitzahl"
                 />
             </div>
             <div className="mb-3">
                 <input onChange={handleChange} value={formData.city} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="city"
                         type="text"
                         placeholder="Stadt"
                 />
             </div>
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1"> Telefonnummer </label>
                 <input onChange={handleChange} value={formData.phone} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                         type="text"
                         placeholder="Telefonnummer"
                 />
             </div>
             <div className="mb-3">
             <label className="block text-gray-700 text-sm font-bold mb-1"> Rolle </label>
               <select id="role" onChange={handleChange} value={formData.roles} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                 <option value="">Bitte auswählen</option>
                 <option value="User">User</option>
                 <option value="Butcher">Butcher</option>
                 <option value="Driver">Driver</option>
                </select>
             </div>
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1"> Standort </label>
                 <input onChange={handleChange} value={formData.location} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                         type="text"
                         placeholder="Standort"
                 />
             </div>


             <div className="flex items-center justify-between">
                <button type="submit" className="inline-flex flex-wrap text-white bg-gray-500 border-0 py-2 px-6 outline outline-offset-2 outline-2 hover:bg-red-500 rounded-full text-lg"
                        > Registrieren
                 </button>
             </div>
         </form>
        </div>
   </div>
    )
}

export default Register