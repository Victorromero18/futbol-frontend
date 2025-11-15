import React from 'react';
import RegistroSuperAdmin from './components/RegistroSuperAdmin';
// Ya no importamos 'Login' aquí, porque el nuevo diseño lo enlaza de otra forma
import './App.css'; 

function App() {
  return (
    // El componente 'RegistroSuperAdmin' ahora maneja todo el layout
    <div>
      <RegistroSuperAdmin />
    </div>
  );
}

export default App;