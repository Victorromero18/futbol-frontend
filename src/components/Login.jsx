import React, { useState } from 'react';
import axios from 'axios';

// La misma URL base de tu API
const API_URL = 'http://localhost:8080/api/auth';

function Login() {
  // Estados para el formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Estado para los mensajes
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');

    try {
      // 1. Llamamos al endpoint de Login
      const response = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password
      });

      // 2. ¡ÉXITO! El backend nos devuelve el token en 'response.data.token'
      //    (Asegúrate de que tu backend lo devuelva así)
      const token = response.data.token; // O como se llame el campo en tu JWT

      // 3. ----- ¡EL PASO MÁS IMPORTANTE! -----
      //    Guardamos el token en el 'localStorage' del navegador.
      //    Esto nos mantendrá "logueados".
      localStorage.setItem('token', token);

      setMensaje('¡Inicio de sesión exitoso!');
      setEmail('');
      setPassword('');
      
      // Opcional: Recargar la página o redirigir al panel de control
      // window.location.href = '/dashboard'; 

    } catch (error) {
      // 4. Si las credenciales son incorrectas o la cuenta no está activa
      console.error('Error en el login:', error);
      setMensaje('Error: Email o contraseña incorrectos, o la cuenta no está verificada.');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
      <h2>Iniciar Sesión</h2>
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
        <button type="submit" style={{ marginTop: '15px' }}>Entrar</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Login;