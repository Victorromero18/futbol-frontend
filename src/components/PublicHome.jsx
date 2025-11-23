import React from 'react';

function PublicHome() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      
      {/* Top App Bar */}
      <header className="sticky top-0 z-10 flex items-center bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-sm p-4 justify-between border-b border-border-light dark:border-border-dark">
        <h1 className="text-text-light-primary dark:text-text-dark-primary text-xl font-bold leading-tight tracking-[-0.015em] flex-1">
          Liga Premier Amateur
        </h1>
        <button className="flex items-center justify-center gap-2 min-w-[84px] cursor-pointer overflow-hidden rounded-full h-10 px-4 bg-primary/20 dark:bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="material-symbols-outlined text-xl">login</span>
          <span className="truncate">Login</span>
        </button>
      </header>

      <main className="flex flex-col gap-4 pb-8">
        {/* Important News Section */}
        <section>
          <h2 className="text-text-light-primary dark:text-text-dark-primary text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Noticias Importantes
          </h2>
          <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch p-4 pt-0 gap-4">
              
              {/* Noticia 1 */}
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-card-light dark:bg-card-dark shadow-sm min-w-64">
                <div 
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg flex flex-col" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9ekw7GDLJrkM-LfyFX8OUWkIuUB70tQQkkmI8t9PTia9mKeoOB5LP8Yq4FdzTysA_Y3fjkUvRNglI7rV7XBjy6ogHhPWEGtFyInw7LvlGeuNsZMH3NkdidcKd0rbe3il_u3muYDyCKwKaGb55o5__46FbDTNLmgh9-kujnENlElpAO7EG3ZmxXH7dQmO6ks7EpJLHZeWK1BZh5YqLcSr-MAazOm3SKaAqqg0w4UDKhUETXy-62OF-uUsLX16EeXIMyGlk-atAPA")' }}
                ></div>
                <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                  <div>
                    <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal">Cambios en el Reglamento</p>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">Nuevas reglas para saques de banda entran en vigor.</p>
                  </div>
                </div>
              </div>

              {/* Noticia 2 */}
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-card-light dark:bg-card-dark shadow-sm min-w-64">
                <div 
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg flex flex-col" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA77qNtswSdgoV6hR7sPNorgzOgS4zPaEEeWOLg7ofDnSJYq__gb2UcRjnK4qgLCDDgW-VPo-2RPkejNSBB2noTcyI48sRtvcTSketW9ypE33yVZzPldkpXvDaAwbbbhZ86Sufyt3KBiRinGvjE7ESpgPK1Zbl3s6MgOlOaiWQIE56QTFTBX8u8gTUn4su5k4LLWHBcvuUefxsGD4WiRsVQn09DnRfCE5ySGUSwFB8I0iyGIjM5_pawtsMa9Gq1vRh8grybyAyZRQ")' }}
                ></div>
                <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                  <div>
                    <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal">Fechas Clave de la Temporada</p>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">No te pierdas el inicio del torneo de Copa.</p>
                  </div>
                </div>
              </div>

              {/* Noticia 3 */}
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-card-light dark:bg-card-dark shadow-sm min-w-64">
                <div 
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg flex flex-col" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAEZLzLgOluPKghPG-4lEo2qYO-hhj7iMG3fvm7dEFkfujzMTQ8TpfV8Nhe2eXhl5FdzngCCU4iCf74rW8SEch_ytaeZ9LeF0ZdE1UtQrlEQCI0tEAIgKEw3KA_br2A2j739Nd-j9lkxnP_lQwNLs_t7945IlknpUg_z0UMUCAx0kUm5hVbmNwcV9hGYJntemk8jOA211cWuTv-rQBUeLBJieoo-e2YcY-9jITKlf7vV5f4UfMxB6x4EmcYTtLNUkuDOrwgbrTgQ")' }}
                ></div>
                <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                  <div>
                    <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal">Anuncios Generales</p>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">Información importante sobre el fair play.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Matchdays Section */}
        <section>
          <h2 className="text-text-light-primary dark:text-text-dark-primary text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Jornadas</h2>
          <div className="border-b border-border-light dark:border-border-dark px-4">
            <div className="flex gap-8">
              <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary pb-[13px] pt-4" href="#">
                <p className="text-primary text-sm font-bold leading-normal tracking-[0.015em]">Liga</p>
              </a>
              <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4" href="#">
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-normal tracking-[0.015em]">Copa</p>
              </a>
              <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4" href="#">
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-normal tracking-[0.015em]">Playoffs</p>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 p-4">
            {/* Partido 1 */}
            <div className="flex flex-col items-center justify-between rounded-lg bg-card-light dark:bg-card-dark p-4 shadow-sm">
              <p className="text-text-light-secondary dark:text-text-dark-secondary text-xs font-medium pb-2">HOY, 19:00</p>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-center gap-2 w-1/3">
                  <img className="h-10 w-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC6mlVzOOBE2ncyESaaN-j-p3xo69rsbKOKbEJvF1wEbCPY5NeGoS7lKJIyIkyxZMEcmZJYbRHKZTzvRqv2IXsfougUFQrbKYVq6jYWvZfDZ1XSDzP4cGxMMWmTIANb0E1shSp6B8ST2tFjVZebZN0MoLye6mccSZra7gHWQAgszPNR4B0vTcW1iTsydj7IwPHNQJo7Aq6bLRnOt1a_xevwbkBWaERTE3aAEtQIhIq8UZnOg1AzSizLCgT3GQclP9Xfi8_7nO3eA" alt="Guerreros FC" />
                  <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium text-center truncate w-full">Guerreros FC</p>
                </div>
                <p className="text-text-light-primary dark:text-text-dark-primary text-2xl font-bold">2 - 1</p>
                <div className="flex flex-col items-center gap-2 w-1/3">
                  <img className="h-10 w-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgMbaa2mmChKipIplTWHg8XAtr0whNvzv8ggrYuvDz0TD9g3giLZ-Ul3zWtuHBM305a8oTzXOmOAY1igi2eiM2w2OAzknMu_QlXn2FdlvwP7hik9vIH5qOmvO5YJ74ntRUhHB5BjFUI6RiCLIVNQmjsLxVguH-_ToSx_NPvTSxn0jQrniTQxBGWWXsSbJGWqJsfOFUv1FYxuHQSEVqhq8zLh11_XEJxmu-Yy2Wwx7X-eeydzTvjfVq0VzN1CSVoBOfXDcA6vk_0Q" alt="Atlético Real" />
                  <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium text-center truncate w-full">Atlético Real</p>
                </div>
              </div>
            </div>

            {/* Partido 2 */}
            <div className="flex flex-col items-center justify-between rounded-lg bg-card-light dark:bg-card-dark p-4 shadow-sm">
              <p className="text-text-light-secondary dark:text-text-dark-secondary text-xs font-medium pb-2">MAÑANA, 15:30</p>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-center gap-2 w-1/3">
                  <img className="h-10 w-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtLwAZXDVkG57cqF1l65WWQ0_Tj6gXHY_2EGjiaK6MhxeWtC3zjeJWgP5uybCef0t5PdSgialQTr831GBSHyZWnwckYw9oXzjkA9kjbVYI-IOdZXAAuPSSyIAFNa4QSLfwrNDbShH7Zu25jXT9mnqlVsTEfQ18hwnYKMOTRUrMxg31P4XmCuZ5TKQpl4RvUYngqmhMV_dBndLLr1axX2NT1mj3QxNirdgORpMmf4HuuhdXpPGswZ0ppi554bLIHYHGgYjsWS1_aA" alt="Dep. Unidos" />
                  <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium text-center truncate w-full">Dep. Unidos</p>
                </div>
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-2xl font-bold">vs</p>
                <div className="flex flex-col items-center gap-2 w-1/3">
                  <img className="h-10 w-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTFwvDykJwGT_zXjMioTuBkvUjzEoqYecudt6csvtoX81ILICruDiytj3TiCN7Ig9qCYTBN6UVuck2IHXWz0S-RSj5T0yq41qBV1_LAiGyI_IPTTH7IJWN-zWwZxwW7BPiSHA-gg2BS2FiDQ7kiH-1UatDh203k74Mz143jxncwzx53kg5g0Pdsjo6hbD2cptmyWoHcarhJrzjk0TmbDv6NF2yD5ExPhI3yTfZtOBcj_sz9gbD1K_n04NjeQtBdUCVBYE7vHEkWw" alt="Estrellas del Sur" />
                  <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium text-center truncate w-full">Estrellas del Sur</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section>
          <h2 className="text-text-light-primary dark:text-text-dark-primary text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Estadísticas</h2>
          <div className="border-b border-border-light dark:border-border-dark px-4">
            <div className="flex gap-8">
              <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary pb-[13px] pt-4" href="#">
                <p className="text-primary text-sm font-bold leading-normal tracking-[0.015em]">Tabla General</p>
              </a>
              <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4" href="#">
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-normal tracking-[0.015em]">Goleo</p>
              </a>
              <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4" href="#">
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-normal tracking-[0.015em]">Expulsados</p>
              </a>
            </div>
          </div>
          <div className="px-4 pt-4">
            <div className="rounded-lg bg-card-light dark:bg-card-dark shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-light dark:bg-background-dark text-xs text-text-light-secondary dark:text-text-dark-secondary uppercase">
                    <tr>
                      <th className="px-4 py-3 text-center" scope="col">#</th>
                      <th className="px-4 py-3" scope="col">Equipo</th>
                      <th className="px-4 py-3 text-center" scope="col">PJ</th>
                      <th className="px-4 py-3 text-center" scope="col">DG</th>
                      <th className="px-4 py-3 text-center" scope="col">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light dark:border-border-dark">
                      <td className="px-4 py-3 text-center text-text-light-primary dark:text-text-dark-primary font-medium">1</td>
                      <th className="px-4 py-3 font-medium text-text-light-primary dark:text-text-dark-primary whitespace-nowrap" scope="row">Guerreros FC</th>
                      <td className="px-4 py-3 text-center text-text-light-secondary dark:text-text-dark-secondary">12</td>
                      <td className="px-4 py-3 text-center text-text-light-secondary dark:text-text-dark-secondary">+15</td>
                      <td className="px-4 py-3 text-center text-text-light-primary dark:text-text-dark-primary font-bold">30</td>
                    </tr>
                    <tr className="border-b border-border-light dark:border-border-dark">
                      <td className="px-4 py-3 text-center text-text-light-primary dark:text-text-dark-primary font-medium">2</td>
                      <th className="px-4 py-3 font-medium text-text-light-primary dark:text-text-dark-primary whitespace-nowrap" scope="row">Atlético Real</th>
                      <td className="px-4 py-3 text-center text-text-light-secondary dark:text-text-dark-secondary">12</td>
                      <td className="px-4 py-3 text-center text-text-light-secondary dark:text-text-dark-secondary">+11</td>
                      <td className="px-4 py-3 text-center text-text-light-primary dark:text-text-dark-primary font-bold">28</td>
                    </tr>
                    <tr className="border-b border-border-light dark:border-border-dark">
                      <td className="px-4 py-3 text-center text-text-light-primary dark:text-text-dark-primary font-medium">3</td>
                      <th className="px-4 py-3 font-medium text-text-light-primary dark:text-text-dark-primary whitespace-nowrap" scope="row">Dep. Unidos</th>
                      <td className="px-4 py-3 text-center text-text-light-secondary dark:text-text-dark-secondary">11</td>
                      <td className="px-4 py-3 text-center text-text-light-secondary dark:text-text-dark-secondary">+8</td>
                      <td className="px-4 py-3 text-center text-text-light-primary dark:text-text-dark-primary font-bold">25</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-center text-text-light-primary dark:text-text-dark-primary font-medium">4</td>
                      <th className="px-4 py-3 font-medium text-text-light-primary dark:text-text-dark-primary whitespace-nowrap" scope="row">Estrellas del Sur</th>
                      <td className="px-4 py-3 text-center text-text-light-secondary dark:text-text-dark-secondary">11</td>
                      <td className="px-4 py-3 text-center text-text-light-secondary dark:text-text-dark-secondary">+5</td>
                      <td className="px-4 py-3 text-center text-text-light-primary dark:text-text-dark-primary font-bold">22</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Advertising Section */}
        <section>
          <h2 className="text-text-light-primary dark:text-text-dark-primary text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Publicidad</h2>
          <div className="px-4">
            <div className="relative flex flex-col items-start justify-end rounded-lg bg-card-light dark:bg-card-dark shadow-sm overflow-hidden p-6 min-h-48">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCNCzCzvKUmLl1yLf4uuY-zBBUZTZlWaCtG3CaxTWSfO--3B89IAGfwp-82WMVmLlEc2cKMnSw3F7kWWYUMtloGrsGwYTmS2LO-JxwKglEUzqcyhLU2zwn6JHbdjMLNPIylXR3yllE3rtrNz3_u3_fz8WNgtsmLB6Dl8Rm7jLM9czNugxB36X0Xm1IUGQ56cJMGTYke-lBJTeb7-ea5Ij3ejW79qxsf0lRPft1mDIePu1EyuysiDz9Sf70pWCdgaOw12eYmAoPcA")' }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-white text-xl font-bold">¡Nuevo Equipo en la Liga!</h3>
                <p className="text-gray-300 text-sm mt-1 mb-4">Los Titanes se unen a la competencia. ¿Tienes lo que se necesita?</p>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Conoce al equipo</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PublicHome;