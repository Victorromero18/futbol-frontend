import React from 'react';
import RegistroSuperAdmin from './components/RegistroSuperAdmin'; // Importa el componente de Registro
import Login from './components/Login'; // Importa el componente de Login
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mi Plataforma de Torneos</h1>
      </header>
      <main>
        {/* Muestra el formulario de Registro */}
        <RegistroSuperAdmin />
        
        {/* Muestra el formulario de Login, justo debajo del de registro */}
        <Login />
      </main>
    </div>
  );
}

export default App;