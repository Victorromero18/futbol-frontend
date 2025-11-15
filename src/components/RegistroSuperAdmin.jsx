import React, { useState } from 'react';
import axios from 'axios';

// URL de tu API
const API_URL = 'http://localhost:8080/api/auth';

function RegistroSuperAdmin() {
  // --- Nuestra lógica de React (useState) ---
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombreLiga, setNombreLiga] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');
    setIsError(false);
    setIsLoading(true);

    try {
      await axios.post(`${API_URL}/register/superadmin`, {
        email: email,
        password: password,
        nombre_liga: nombreLiga
      });
      setMensaje('¡Registro exitoso! Revisa tu correo.');
      setIsError(false);
      setEmail('');
      setPassword('');
      setNombreLiga('');

    } catch (error) {
      console.error('Error en el registro:', error);
      setMensaje('Error al registrar. Es posible que el email ya esté en uso.');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // --- HTML de la IA (traducido a JSX) ---
  return (
    <div className="font-display bg-background-light dark:bg-background-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1">
              <header className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-3">
                <div className="flex items-center gap-4 text-[#0d1b12] dark:text-white">
                  <div className="size-6 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                  </div>
                  <h2 className="text-[#0d1b12] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">LeagueManager Pro</h2>
                </div>
              </header>
              <main className="flex-grow flex items-center justify-center p-4">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  {/* <!-- Panel Izquierdo (Branding) --> */}
                  <div className="hidden md:flex flex-col items-start text-left gap-6">
                    <h1 className="text-[#0d1b12] dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">The Ultimate Football League Management Platform.</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">Set up your league, manage teams, and track stats all in one place. Get started in minutes.</p>
                    <div className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-xl mt-4" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCpx5xkayGGbBTrkGoLJrtjzPtSW-tpwaWUOdImaf-ij5jGsgWpX32fo3HHLfWYmna8Hf5d54g8bt2okXvZcfpNGGch0uvZYjDVWblCFe2n-w_T2uQSkKeIWe3Y6aaJEkRNjVNb4jJmCoIojuLpacD1dizBr_Y__s8QyktWTv3ZgEC7ippEufg06J_jOXROq9lIQqwCAx9qJ7Y1Ys0FBgi1iKG5_Fgcdp7-eiX02FFlQZJlUfgAwFmvcc1E3LrPONnn_IaNOKr8i1Q")' }}></div>
                  </div>
                  
                  {/* <!-- Panel Derecho (Formulario) --> */}
                  <div className="w-full max-w-md mx-auto bg-white dark:bg-background-dark dark:border dark:border-gray-700 p-8 rounded-xl shadow-lg">
                    <div className="flex flex-col gap-2 text-center md:text-left mb-8">
                      <h1 className="text-[#0d1b12] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Create Your SuperAdmin Account</h1>
                      <h2 className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Set up your league and start managing today.</h2>
                    </div>
                    
                    {/* --- Aquí conectamos nuestro Formulario de React --- */}
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                      <label className="flex flex-col w-full">
                        <p className="text-[#0d1b12] dark:text-gray-200 text-sm font-medium leading-normal pb-2">League Name</p>
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d1b12] dark:text-white dark:bg-gray-800 dark:placeholder:text-gray-500 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-background-light focus:border-primary/50 h-12 placeholder:text-gray-400 px-4 text-base font-normal leading-normal"
                          placeholder="Enter the name of your football league"
                          type="text"
                          value={nombreLiga}
                          onChange={(e) => setNombreLiga(e.target.value)}
                          disabled={isLoading}
                        />
                      </label>
                      <label className="flex flex-col w-full">
                        <p className="text-[#0d1b12] dark:text-gray-200 text-sm font-medium leading-normal pb-2">Email Address</p>
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d1b12] dark:text-white dark:bg-gray-800 dark:placeholder:text-gray-500 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-background-light focus:border-primary/50 h-12 placeholder:text-gray-400 px-4 text-base font-normal leading-normal"
                          placeholder="you@example.com"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={isLoading}
                        />
                      </label>
                      <label className="flex flex-col w-full">
                        <p className="text-[#0d1b12] dark:text-gray-200 text-sm font-medium leading-normal pb-2">Password</p>
                        <div className="flex w-full flex-1 items-stretch rounded-lg border border-gray-300 dark:border-gray-600 focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary/50">
                          <input
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-[#0d1b12] dark:text-white dark:bg-gray-800 dark:placeholder:text-gray-500 focus:outline-0 focus:ring-0 border-none bg-background-light h-12 placeholder:text-gray-400 px-4 text-base font-normal leading-normal"
                            placeholder="Enter a secure password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                          />
                          <div className="text-gray-400 dark:text-gray-500 flex bg-background-light dark:bg-gray-800 items-center justify-center pr-4 rounded-r-lg">
                            <span className="material-symbols-outlined cursor-pointer" style={{ fontSize: '20px' }}>visibility</span>
                          </div>
                        </div>
                      </label>
                      
                      <button 
                        type="submit"
                        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-[#0d1b12] text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors disabled:opacity-50"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                          'Create Account'
                        )}
                      </button>
                    </form>
                    
                    {/* --- Nuestra Alerta Mejorada --- */}
                    {mensaje && (
                      <div 
                        className={`p-3 rounded-md mt-4 text-center text-sm ${
                          isError 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {mensaje}
                      </div>
                    )}
                    
                    <div className="text-center mt-6">
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Already have an account? <a className="font-medium text-primary hover:underline" href="#">Sign In</a>
                      </p>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroSuperAdmin;