import React from "react";

export const ActualizarUsuario = () => {
  return (
    <div>
      <body class="ventas">
        <main class="centrar main-div">
          <h1 class="centrar">Editar Usuario</h1>

          <h2 class="centrar">Id #</h2>

          <div class="contenedor4x5">
            <div class="C1 R1">
              <p class="p2">Nombre:</p>
            </div>

            <div class="C2 R1">
              <input type="text" class="input1" placeholder="Digite su nombre">
                {" "}
              </input>
            </div>

            <div class="C1 R3">
              <p class="p2">Numero:</p>
            </div>

            <div class="C2 R3">
              <input type="text" class="input1" placeholder="Digite Numero">
                {" "}
              </input>
            </div>

            <div class="C1 R5">
              <p class="p2">Email:</p>
            </div>

            <div class="C2 R5">
              <input type="email" class="input1" placeholder="Digite su Email">
                {" "}
              </input>
            </div>

            <div class="C3 R2">
              <p class="p2">Estado:</p>
            </div>

            <div class="C4 R2">
              <select>
                <option>Activo</option>
                <option>Inactivo</option>
              </select>
            </div>

            <div class="C3 R4">
              <p class="p2">Rol:</p>
            </div>

            <div class="C4 R4">
              <select>
                <option>Administrador</option>
                <option>Cliente</option>
                <option>Vendedor</option>
              </select>
            </div>
          </div>
          <div class="margen">
            <button class="boton-venta button-g x " id="open">
              Actualizar
            </button>

            <div id="contenedorpopup" class="contenedor-pop">
              <div class="popup">
                <h1>
                  Usuario Actualizado Exitosamente{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-checks"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 12l5 5l10 -10" />
                    <path d="M2 12l5 5m5 -5l5 -5" />
                  </svg>
                </h1>
                <button class="boton-ver-ventas">Ver Usuarios</button>
                <button class="boton-nueva-venta">Nuevo Usuario</button>
                {/* <!-- boton X eliminado --> */}
                {/* <!<button id="cerrar" class="cerrar-pop-venta"> 
              X
            </button> --> */}
              </div>
            </div>
          </div>
        </main>

        <script src="js/popup.js"></script>
      </body>
    </div>
  );
};
