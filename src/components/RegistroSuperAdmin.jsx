import React, { useState } from 'react';
import axios from 'axios';

// URL de tu API (corregida para evitar warnings)
const API_URL = 'http://localhost:8080/api/auth';

function RegistroSuperAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombreLiga, setNombreLiga] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');

    try {
      await axios.post(`${API_URL}/register/superadmin`, {
        email: email,
        password: password,
        nombre_liga: nombreLiga
      });

      setMensaje('¡Registro exitoso! Revisa tu correo para activar la cuenta.');
      setEmail('');
      setPassword('');
      setNombreLiga('');

    } catch (error) {
      console.error('Error en el registro:', error);
      setMensaje('Error al registrar. Es posible que el email ya esté en uso.');
    }
  };

  return (
    // Tarjeta con fondo blanco, sombra y bordes redondeados
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Crear Cuenta de SuperAdmin</h2>
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la Liga</label>
          <input
            type="text"
            value={nombreLiga}
            onChange={(e) => setNombreLiga(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
        >
          Registrar
        </button>
      </form>

      {mensaje && <p className="text-center text-sm mt-4 text-red-600">{mensaje}</p>}
    </div>
  );
}

export default RegistroSuperAdmin;