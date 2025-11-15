import React, { useState } from 'react';
import axios from 'axios';

// Esta es la línea que cambié:
const API_URL = 'http://localhost:8080/api/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password
      });

      const token = response.data.token;
      localStorage.setItem('token', token);

      setMensaje('¡Inicio de sesión exitoso!');
      setEmail('');
      setPassword('');

    } catch (error) {
      console.error('Error en el login:', error);
      setMensaje('Error: Email o contraseña incorrectos.');
    }
  };

  return (
    // Tarjeta con fondo blanco, sombra y bordes redondeados
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 transition duration-200"
        >
          Entrar
        </button>
      </form>

      {mensaje && <p className="text-center text-sm mt-4 text-red-600">{mensaje}</p>}
    </div>
  );
}

export default Login;