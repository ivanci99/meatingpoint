import axios from "axios";
import React, { useState } from "react";


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
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="E-Mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Passwort"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Anmelden</button>
    </form>
  );
};

export default LoginForm;