import React, { useState } from 'react';
import axios from 'axios';

// Esta es la URL de tu API de Java.
// Por ahora, apunta a 'localhost', pero la cambiarás cuando la despliegues.
const API_URL = 'http://localhost:8080/api/auth';

function RegistroSuperAdmin() {
  // 1. Estados para guardar los datos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombreLiga, setNombreLiga] = useState('');
  
  // 2. Estado para mostrar mensajes al usuario
  const [mensaje, setMensaje] = useState('');

  // 3. Esta función se ejecuta cuando el usuario envía el formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue
    setMensaje(''); // Limpia mensajes anteriores

    try {
      // 4. Llamamos al endpoint de tu API que definiste en el documento
      await axios.post(`${API_URL}/register/superadmin`, {
        email: email,
        password: password,
        nombre_liga: nombreLiga
      });

      // 5. Si todo sale bien
      setMensaje('¡Registro exitoso! Revisa tu correo para activar la cuenta.');
      
      // Limpiamos el formulario
      setEmail('');
      setPassword('');
      setNombreLiga('');

    } catch (error) {
      // 6. Si el backend da un error (ej. email ya existe)
      console.error('Error en el registro:', error);
      setMensaje('Error al registrar. Es posible que el email ya esté en uso.');
    }
  };

  // 7. Este es el HTML (JSX) que verá el usuario
  return (
    <div>
      <h2>Crear Cuenta de SuperAdmin y Liga</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Contraseña: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Nombre de la Liga: </label>
          <input
            type="text"
            value={nombreLiga}
            onChange={(e) => setNombreLiga(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '15px' }}>Registrar</button>
      </form>

      {/* 8. Aquí se muestra el mensaje de éxito o error */}
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default RegistroSuperAdmin;