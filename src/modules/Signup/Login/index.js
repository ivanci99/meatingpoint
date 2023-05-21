import React, { useState } from "react";
import HeaderClear from '../../../components/Header/HeaderClear';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div>
            <HeaderClear/>
        
        <div class="flex justify-center items-center h-screen">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
             <div class="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" for="username"> Benutzername </label>
                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Benutzername"
                  />
             </div>
             <div className="mb-6">
                 <label className="block text-gray-700 text-sm font-bold mb-2" for="password"> Passwort </label>
                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                         type="password"
                         placeholder="Passwort"
                 />
             </div>
             <div className="flex items-center justify-between">
                <button className="inline-flex flex-wrap text-white bg-gray-500 border-0 py-2 px-6 outline outline-offset-2 outline-2 hover:bg-red-500 rounded-full text-lg"
                        type="button"> Anmelden
                 </button>
                 <a class="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-red-500" href="/register">Register</a>
             </div>
         </form>
        </div>
        </div>
    )
}

export default Login