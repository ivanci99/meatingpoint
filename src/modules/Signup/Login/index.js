import axios from "axios";
import React, { useState } from "react";
import HeaderClear from '../../../components/Header/HeaderClear'
import { Link } from 'react-router-dom'

export const login = async (email, password) => {
  try {
    const response = await axios.post(
      "http://meating-point.innofabrik.de/api/users",
      {
        email,
        password,
      }
    );

    const { token } = response.data;

    // Speichere den JWT-Token im Local Storage
    localStorage.setItem("jwtToken", token);

    // Gib das Token zurück, um anzuzeigen, dass der Benutzer angemeldet ist
    return token;
  } catch (error) {
    // Bei Fehlern kannst du hier eine entsprechende Behandlung implementieren
    console.error(error);
    throw error;
  }
};  


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const token = await login(email, password);
      setIsLoggedIn(true);
      // Weitere Aktionen nach erfolgreicher Anmeldung
    } catch (error) {
      // Fehlerbehandlung bei Anmeldefehler
    }
  };


    return (
       <div>
          <HeaderClear/>
        <div className="flex justify-center items-center h-screen">
          <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-1">
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1"> E-Mail </label>
                 <input  value={email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="eMail"
                  />
             </div>
             <div className="mb-3">
                 <label className="block text-gray-700 text-sm font-bold mb-1"> Passwort </label>
                 <input value={password} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                         type="password"
                         placeholder="Passwort"
                 />
             </div>
             
             <div className="flex items-center justify-between">
                <button type="submit" className="inline-flex flex-wrap text-white bg-gray-500 border-0 py-2 px-6 outline outline-offset-2 outline-2 hover:bg-red-500 rounded-full text-lg"
                        > Anmelden
                 </button>
                 <a className="ml-5 text-gray-600 font-bold hover:text-red-500"> <Link to={'/register'}>Registrieren</Link></a>
             </div>
         </form>
        </div>
   </div>
    )
}

export default LoginForm;